const form = document.querySelector(".js-userName"),
    input = form.querySelector("input"),
    welcome = document.querySelector(".js-welcome");

const USER_NAME = "yourName",
    SHOWING_CL = "showing";

function submitUserName(event) {
    event.preventDefault();
    localStorage.setItem(USER_NAME, input.value);
    printUserName(input.value);
}

function printUserName(text) {
    form.classList.remove(SHOWING_CL);
    welcome.classList.add(SHOWING_CL);
    welcome.innerText = `WELCOME ${text}!`;
}

function loadUserName() {
    const userName = localStorage.getItem(USER_NAME)
    if (userName) {
        printUserName(userName);
    } else {
        form.classList.add(SHOWING_CL);
        form.addEventListener("submit", submitUserName);
    }
}

function init() {
    loadUserName();
}

init();