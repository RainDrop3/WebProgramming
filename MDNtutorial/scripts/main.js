let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/Cup-Of-Coffee.png") {
      myImage.setAttribute("src", "images/coffee2.png");
    } else {
      myImage.setAttribute("src", "images/Cup-Of-Coffee.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    
    if(!myName || myName === null) {
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }
    
    if(!localStorage.getItem("name")) {
        setUserName();
    }
    else{
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Welcome, " + storedName;
    }
};

myButton.onclick = function() {
    setUserName();
};

