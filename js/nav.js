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
menuButton.setAttribute("data-toggle", "collapse");
menuButton.setAttribute("data-target", "#expand-me");
container.appendChild(menuButton);

var menuIcon = document.createElement("span");
menuIcon.setAttribute("class", "navbar-toggler-icon");
menuButton.appendChild(menuIcon);

var navLinksExpander = document.createElement("div");
navLinksExpander.setAttribute("class", "collapse navbar-collapse");
navLinksExpander.setAttribute("id", "expand-me");
container.appendChild(navLinksExpander);

var navLinks = document.createElement("div");
navLinks.setAttribute("class", "navbar-nav ms-auto");
navLinksExpander.appendChild(navLinks);

var link = document.createElement("a");
link.setAttribute("class", "nav-item nav-link");
link.setAttribute("href", "live.html");
link.textContent = "Live Stream";
navLinks.appendChild(link);

var link = document.createElement("a");
link.setAttribute("class", "nav-item nav-link");
link.setAttribute("href", "chatroom.html");
link.textContent = "Audience Chatroom";
navLinks.appendChild(link);

var link = document.createElement("a");
link.setAttribute("class", "nav-item nav-link");
link.setAttribute("href", "graduates.html");
link.textContent = "Find Your Grad";
navLinks.appendChild(link);

// Add main navigation to webpage
document.body.appendChild(mainNavWrapper); 

// Get filename of page
var url = window.location.pathname;
var page = url.substring(url.lastIndexOf('/') + 1);

// Set active link based on filename
function activeLink(page) {
    if (page == "commencement.html") {
        var highlight = document.querySelector("a[href='commencement.html']");
        highlight.classList.add("active");
    }
    else if (page == "graduates.html") {
        var highlight = document.querySelector("[href='graduates.html']");
        highlight.classList.add("active");
    }
    else if (page == "photos.html") {
        var highlight = document.querySelector("[href='photos.html']");
        highlight.classList.add("active");
    }

}

activeLink(page);