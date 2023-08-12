//globale variable for inpute texte
let inputeValue = "";
//making input text disapear when blur
let inputText = document.querySelector("#text");
inputText.addEventListener("blur", function () {
  inputeValue = inputText.value;
  inputText.value = "";
});
inputText.addEventListener("keyup", function (e) {
  inputeValue = inputText.value;
  if (e.key === "Enter") {
    inputText.value = "";
    inputeValue = "";
  }
});
let taskes = document.querySelector(".taskes");
let addTask = document
  .querySelector("#button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (inputeValue !== "") {
      let task = document.createTextNode(inputeValue);
      let taskDiv = document.createElement("div");
      taskDiv.className = "taskDiv";
      let taskP = document.createElement("p");
      taskP.className = "taskP";
      taskP.appendChild(task);
      let deletButton = document.createElement("button");
      let deletee = document.createTextNode("X");
      deletButton.className = "delete";
      deletButton.appendChild(deletee);
      taskDiv.appendChild(taskP);
      taskDiv.appendChild(deletButton);
      taskes.appendChild(taskDiv);
      window.localStorage.data = taskes.innerHTML;
      inputeValue = "";
    }
  });
taskes.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    window.localStorage.data = taskes.innerHTML;
  }
  let parent = e.target.closest(".taskDiv")
  if (parent) { 
    parent.classList.toggle("done");
    window.localStorage.data = taskes.innerHTML;
  }
});
let alert = document.querySelector(".alert")
let yes = document.querySelector(".yes")
let no = document.querySelector(".yes")
let clearButton = document.querySelector(".Clear").addEventListener("click", _ => {
  if (taskes.innerHTML !== "") {
    alert.style.display = "flex"
  } else {
    window.alert("Nice job you have 0 taskes in your life already")
  }
  
})
document.addEventListener("click", e => {
  if (e.target.classList.contains("yes")) {
    alert.style.display = "none"
    taskes.innerHTML = ""
    window.localStorage.clear()
  }
  if (e.target.classList.contains("no")) {
    alert.style.display = "none"
  }
})

taskes.innerHTML = window.localStorage.getItem("data")
/* 
let tasks = []; // Array to store tasks

let inputText = document.querySelector("#text");
let taskes = document.querySelector(".taskes");

// Event listener to add a task
document.querySelector("#button").addEventListener("click", function (e) {
  e.preventDefault();
  if (inputText.value !== "") {
    tasks.push(inputText.value); // Add task to the array
    updateTaskList();
  }
});

// Event delegation for delete button
taskes.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let taskIndex = parseInt(e.target.parentElement.dataset.index);
    tasks.splice(taskIndex, 1); // Remove task from the array
    updateTaskList();
  }
});

// Update the task list in the DOM and localStorage
function updateTaskList() {
  taskes.innerHTML = ""; // Clear the current task list
  tasks.forEach((task, index) => {
    let taskDiv = document.createElement("div");
    taskDiv.className = "taskDiv";
    taskDiv.dataset.index = index; // Store index in dataset for deletion
    let taskP = document.createElement("p");
    taskP.className = "taskP";
    taskP.appendChild(document.createTextNode(task));
    let deletButton = document.createElement("button");
    deletButton.className = "delete";
    deletButton.appendChild(document.createTextNode("X"));
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(deletButton);
    taskes.appendChild(taskDiv);
  });
  window.localStorage.data = JSON.stringify(tasks); // Update localStorage
}

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(window.localStorage.getItem("data") || "[]");
  updateTaskList();
});

*/