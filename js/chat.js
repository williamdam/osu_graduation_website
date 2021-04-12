
    // Firebase configuration
    var firebaseConfig = {
        // Insert Firebase credentials here
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    // View changes between snapshots
    db.collection("messages").orderBy("time")
    .onSnapshot((snapshot) => {
        if (snapshot.docs.length === 0) {
            showDefaultMessage();
        }
        else if (document.getElementById("default-message") != null) {
            removeDefaultMessage();
        }
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New msg: ", change.doc.data());
                showMessage(change.doc.data().post, change.doc.id);
                scrollBottom();
            }
            if (change.type === "modified") {
                console.log("Modified msg: ", change.doc.data());
                modMessage(change.doc.data().post, change.doc.id);
                scrollBottom();
            }
            if (change.type === "removed") {
                console.log("Removed msg: ", change.doc.data());
                removeMessage(change.doc.id);
                scrollBottom();
            }
            
        });
    });

    function showDefaultMessage() {
        showMessage("Post a congratulatory message!", "default-message");
    }

    function removeDefaultMessage() {
        var defaultMessage = document.getElementById("default-message");
        defaultMessage.remove();
    }

    function showMessage(message, id) {
        var link = document.createElement("p");
        link.setAttribute("id", id);
        link.innerHTML = message;
        messageArea.appendChild(link);
    }

    function modMessage(message, id) {
        document.getElementById(id).textContent = message;
    }

    function removeMessage(id) {
        document.getElementById(id).remove();
    }

    function scrollBottom() {
        var objDiv = document.querySelector(".chat-box");
        objDiv.scrollTop = objDiv.scrollHeight;
        console.log("scroll called");
    }
    
    var messageArea = document.createElement("div");
    messageArea.setAttribute("class", "container row-6 overflow-auto chat-box");

    document.getElementById("chat-area").appendChild(messageArea);

    const form = document.getElementById('chat-form');
    const sendButton = document.getElementById('send-button');

    function postNewMessage() {
        var myMessage = document.getElementById('form-message').value;
        console.log(myMessage);

        db.collection("messages").add({
            post: myMessage,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    sendButton.addEventListener('click', () => {
        
        postNewMessage();
        document.getElementById('chat-form').reset();
    });

    function postMessageOnReturn() {
        postNewMessage();
        document.getElementById('chat-form').reset();
        //document.getElementById('form-message').value = "";
        return false;
    }