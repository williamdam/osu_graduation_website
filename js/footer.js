var footerBar = document.createElement("footer");
footerBar.setAttribute("class", "osu-footer");

var footerContent = document.createElement("p");
footerContent.setAttribute("class", "text-light container no-margin-bottom");
footerContent.innerHTML = "&copy; William Dam - Software Engineer | (949) 478-1931 | willdam@gmail.com";
footerBar.appendChild(footerContent);

document.body.appendChild(footerBar);
