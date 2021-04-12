// Firebase configuration
var firebaseConfig = {
    // Get credentials from firebaseconfig.txt
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// View changes between snapshots
db.collection("grads").orderBy("lastName")
.onSnapshot((snapshot) => {
    if (snapshot.docs.length === 0) {
        showDefaultMessage();
    }
    else if (document.getElementById("default-message") != null) {
        removeDefaultMessage();
    }
    snapshot.docChanges().forEach((change, i) => {

        if (change.type === "added") {
            console.log("New post: ", change.doc.data());
            console.log("Element: " + i)
            var card = gradCard(change.doc.data().firstName, change.doc.data().lastName, change.doc.data().message, change.doc.data().filepath, change.doc.id);
            
            if (smallestColumn() == 1) {
                document.getElementById("grad-col-1").appendChild(card);
            } 
            else if (smallestColumn() == 2) {
                document.getElementById("grad-col-2").appendChild(card);
            }
            else {
                document.getElementById("grad-col-3").appendChild(card);
            }
        
        }
        if (change.type === "modified") {
            console.log("Modified post: ", change.doc.data());
            
        }
        if (change.type === "removed") {
            console.log("Removed post: ", change.doc.data());
            removeMessage(change.doc.id);
        }
    });
});

var photoGalleryArea = document.createElement("div");
photoGalleryArea.setAttribute("class", "container my-4 min-body-height");

function removeMessage(id) {
    document.getElementById(id).remove();
}

function showDefaultMessage() {
    var defaultMessage = document.createElement("p");
    defaultMessage.setAttribute("id", "default-message");
    defaultMessage.innerHTML = "No grads have posted their photos yet."
    photoGalleryArea.appendChild(defaultMessage);
}

function removeDefaultMessage() {
    var defaultMessage = document.getElementById("default-message");
    defaultMessage.remove();
}

function smallestColumn() {
    var col1 = document.getElementById("grad-col-1").childElementCount;
    var col2 = document.getElementById("grad-col-2").childElementCount;
    var col3 = document.getElementById("grad-col-3").childElementCount;

    console.log("col 1: " + col1);
    console.log("col 2: " + col2);
    console.log("col 3: " + col3);

    if (col1 <= col2 && col1 <= col3) {
        return 1;
    }
    else if (col2 <= col1 && col2 <=col3) {
        return 2;
    }
    
    return 3;
    
}

function gradCard(first, last, message, url, id) {

    var cardBox = document.createElement("div");
    cardBox.setAttribute("class", "card my-4");
    cardBox.setAttribute("id", id);

    var gradImage = document.createElement("img");
    gradImage.setAttribute("src", url);
    gradImage.setAttribute("class", "card-img-top");
    cardBox.appendChild(gradImage);

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBox.appendChild(cardBody);

    var nameLine = document.createElement("p");
    nameLine.setAttribute("class", "card-text");
    nameLine.innerHTML = "<strong>" + first + " " + last + "</strong>";
    cardBody.appendChild(nameLine);

    var messageArea = document.createElement("p");
    messageArea.setAttribute("class", "card-text");
    messageArea.innerHTML = message;
    cardBody.appendChild(messageArea);

    //photoGalleryArea.appendChild(cardBox);
    return cardBox;
}

//document.body.appendChild(photoGalleryArea);