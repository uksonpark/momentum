const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOLIST = "yourToDo";
let toDos = [];

function removeToDo(e) {
    const clickedToDo = e.target.parentNode;
    toDoList.removeChild(clickedToDo);
    const cleanToDo = toDos.filter(toDo => { return toDo.id !== parseInt(clickedToDo.id, 10) });
    toDos = cleanToDo;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function printToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const id = toDos.length + 1;
    li.id = id;
    span.innerText = text;
    delBtn.innerText = "del";
    delBtn.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text,
        id
    }
    toDos.push(toDoObj);
    saveToDo();
}

function submitToDo(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = "";
    printToDo(toDo);
}

function loadToDo() {
    const savedToDo = localStorage.getItem(TODOLIST);
    if (savedToDo) {
        const parsedToDo = JSON.parse(savedToDo);
        parsedToDo.forEach(aToDo => printToDo(aToDo.text));
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", submitToDo);
}

init();