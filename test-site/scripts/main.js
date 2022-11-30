const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/icon.png") {
        myImage.setAttribute("src", "images/icon2.png");
    } else {
        myImage.setAttribute("src", "images/icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Yandex is cool, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};

const mainName = document.querySelector("h2");
mainName.onclick = () => {
    if (mainName.textContent === "Создание и использование в современности.") {
        mainName.textContent = "Пасхалка.";
    } else {
        mainName.textContent = "Создание и использование в современности."
    }
};
    
