var mainNavWrapper = document.createElement("nav");
mainNavWrapper.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-primary");

var container = document.createElement("div");
container.setAttribute("class", "container");
mainNavWrapper.appendChild(container);

var logoLink = document.createElement("a");
logoLink.setAttribute("class", "navbar-brand");
logoLink.setAttribute("href", "index.html");
container.appendChild(logoLink);

var logoImage = document.createElement("img");
logoImage.setAttribute("class", "nav-logo");
logoImage.setAttribute("src", "images/logo-white-600.png");
logoLink.appendChild(logoImage);

var menuButton = document.createElement("button");
menuButton.setAttribute("class", "navbar-toggler");
menuButton.setAttribute("type", "button");
menuButton.setAttribute("data-bs-toggle", "collapse");
menuButton.setAttribute("data-bs-target", "#navbarSupportedContent");
menuButton.setAttribute("aria-controls", "navbarSupportedContent");
menuButton.setAttribute("aria-expanded", "false");
menuButton.setAttribute("aria-label", "Toggle navigation");
container.appendChild(menuButton);

var menuIcon = document.createElement("span");
menuIcon.setAttribute("class", "navbar-toggler-icon");
menuButton.appendChild(menuIcon);

var navLinksExpander = document.createElement("div");
navLinksExpander.setAttribute("class", "collapse navbar-collapse");
navLinksExpander.setAttribute("id", "navbarSupportedContent");
container.appendChild(navLinksExpander);

var navLinks = document.createElement("ul");
navLinks.setAttribute("class", "navbar-nav ms-auto mb-2 mb-lg-0");
navLinksExpander.appendChild(navLinks);

var li = document.createElement("li");
li.setAttribute("class", "nav-item");
navLinks.appendChild(li);

var link = document.createElement("a");
link.setAttribute("class", "nav-link");
link.setAttribute("href", "live.html");
link.textContent = "Live Stream";
li.appendChild(link);

var li = document.createElement("li");
li.setAttribute("class", "nav-item");
navLinks.appendChild(li);

var link = document.createElement("a");
link.setAttribute("class", "nav-link");
link.setAttribute("href", "chatroom.html");
link.textContent = "Audience Chatroom";
li.appendChild(link);

var li = document.createElement("li");
li.setAttribute("class", "nav-item");
navLinks.appendChild(li);

var link = document.createElement("a");
link.setAttribute("class", "nav-link");
link.setAttribute("href", "graduates.html");
link.textContent = "Find Your Grad";
li.appendChild(link);

// Add main navigation to webpage
document.body.appendChild(mainNavWrapper); 

// Get filename of page
var url = window.location.pathname;
var page = url.substring(url.lastIndexOf('/') + 1);

// Set active link based on filename
function activeLink(page) {
    if (page == "live.html") {
        var highlight = document.querySelector("a[href='live.html']");
        highlight.classList.add("active");
    }
    else if (page == "chatroom.html") {
        var highlight = document.querySelector("[href='chatroom.html']");
        highlight.classList.add("active");
    }
    else if (page == "graduates.html") {
        var highlight = document.querySelector("[href='graduates.html']");
        highlight.classList.add("active");
    }

}

activeLink(page);