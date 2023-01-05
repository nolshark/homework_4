var startButton = document.querySelector("#start");
var startTimer = document.querySelector("#start")
var pageOne = document.querySelector("#pageOne")
var pageTwo = document.querySelector("#pageTwo")
var pageTwoAnswers = document.querySelector("#pageTwoOptions")
var pageThree = document.querySelector("#pageThree")
var pageThreeAnswers = document.querySelector("#pageThreeOptions")
var pageFour = document.querySelector("#pageFour")

startButton.addEventListener("click", startQuiz) 
startButton.addEventListener("click", startTimer) 

function startQuiz () {
    pageOne.classList.add("hide");
    pageTwo.classList.remove("hide");
    startButton.addEventListener("click", startTimer) 
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
pageTwoAnswers.addEventListener("click", nextPage2)

function nextPage2 () {
    pageTwo.classList.add("hide");
    pageThree.classList.remove("hide");
}

pageThreeAnswers.addEventListener("click", nextPage3)

function nextPage3 () {
    pageThree.classList.add("hide");
    pageFour.classList.remove("hide");
}

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  renderTodos();
}

function storeTodos() {
  localStorage.setItem("nameEntry", JSON.stringify(todos));
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();
  
  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.value = "";

  storeTodos();
  renderTodos();
});

todoList.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index);

    storeTodos();
    renderTodos();
  }
});