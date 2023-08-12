/*

      let task = document.createTextNode();
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
      taskes.appendChild(taskDiv); */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////V1/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  
  //globale variable for my Data in the localStorage
if (!Boolean(window.localStorage.getItem("myData"))) {
  window.localStorage.myData = "";
}
let myData = Array();
myData = window.localStorage.getItem("myData").split(",");
if (window.localStorage.getItem("myData").split(",")[0] === "") {
  myData.splice(0, 1);
}
//globale variable for inpute texte
let inputeValue = "";
//making input text disapear when blur
let inputText = document.querySelector("#text");
inputText.addEventListener("blur", function () {
  inputeValue = inputText.value;
  inputText.value = "";
});
//making input text disapear when click on enter
inputText.addEventListener("keyup", function (e) {
  inputeValue = inputText.value;
  if (e.key === "Enter") {
    inputText.value = "";
  }
});
let eventTriggerd = false
//add data to localstorage when click
let addTask = document.querySelector("#button").addEventListener("click", function (e) {
    e.preventDefault();
    if (inputeValue !== "") {
      myData.push(inputeValue);
      window.localStorage.myData = myData;
      eventTriggerd= true
    }
  });
  let taskes = document.querySelector(".taskes");
setInterval(function () {
  console.log("i'm working :(")
  if (window.localStorage.getItem("myData").split(",").length > 0 &&Boolean(window.localStorage.getItem("myData"))&&eventTriggerd){
    eventTriggerd = false
    taskes.innerHTML=""
    for (let i = 0;i < window.localStorage.getItem("myData").split(",").length;i++) {
      let task = document.createTextNode(
        window.localStorage.getItem("myData").split(",")[i]
      );
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
      //making delet button delet the task from HTML + localStorage
      deletButton.addEventListener("click", function (e) {
        eventTriggerd = true
        taskDiv.remove();
        console.log(myData);
        console.log(i);
        let t =myData.splice(i, 1)
        console.log(t)
        console.log(myData);
        window.localStorage.myData = myData;
      });
    }
  }
  },100)
document.addEventListener("DOMContentLoaded", function () {
  eventTriggerd = true
  })
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////V2/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
//globale variable for my Data in the localStorage
if (!Boolean(window.localStorage.getItem("myData"))) {
  window.localStorage.myData = "";
}
let myData = Array();
myData = window.localStorage.getItem("myData").split(",");
if (window.localStorage.getItem("myData").split(",")[0] === "") {
  myData.splice(0, 1);
}
//globale variable for inpute texte
let inputeValue = "";
//making input text disapear when blur
let inputText = document.querySelector("#text");
inputText.addEventListener("blur", function () {
  inputeValue = inputText.value;
  inputText.value = "";
});
//making input text disapear when click on enter
inputText.addEventListener("keyup", function (e) {
  inputeValue = inputText.value;
  if (e.key === "Enter") {
    inputText.value = "";
    inputeValue = "";
  }
});
let eventTriggerd = false;
//add data to localstorage when click
let addTask = document
  .querySelector("#button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (inputeValue !== "") {
      myData.push(inputeValue);
      inputeValue = "";
      window.localStorage.myData = myData;
      Display();
    }
  });
let taskes = document.querySelector(".taskes");
//Display Function
let Display = function () {
  if (
    window.localStorage.getItem("myData").split(",").length > 0 &&
    Boolean(window.localStorage.getItem("myData"))
  ) {
    eventTriggerd = false;
    taskes.innerHTML = "";
    for (
      let i = 0;
      i < window.localStorage.getItem("myData").split(",").length;
      i++
    ) {
      let task = document.createTextNode(
        window.localStorage.getItem("myData").split(",")[i]
      );
      let taskDiv = document.createElement("div");
      taskDiv.className = "taskDiv";
      let taskP = document.createElement("p");
      taskP.className = "taskP";
      taskP.appendChild(task);
      let deletButton = document.createElement("button");
      deletButton.setAttribute("data-indix", i);
      let deletee = document.createTextNode("X");
      deletButton.className = "delete";
      deletButton.appendChild(deletee);
      taskDiv.appendChild(taskP);
      taskDiv.appendChild(deletButton);
      taskes.appendChild(taskDiv);
      //making delet button delet the task from HTML + localStorage
      deletButton.addEventListener("click", function (e) {
        window.location.reload();
        myData.splice(e.currentTarget.dataset.indix, 1);
        taskDiv.remove();
        window.localStorage.myData = myData;
      });
    }
  }
};
document.addEventListener("DOMContentLoaded", function () {
  window.localStorage.myData = myData;
  Display();
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// V3 maybe not woriking correctly //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let key =0
let keyArray = Array()
if (!Boolean(window.localStorage.keyArray)) {
  window.localStorage.setItem("keyArray",-1)
}
//Add Task Button
let taskes = document.querySelector(".taskes"); //Big div for taskes
let addTask = document.querySelector("#button").addEventListener("click", function (e) {
  e.preventDefault();
  if (inputeValue !== "") {
    keyArray = window.localStorage.getItem("keyArray").split(",")
    if (keyArray.includes(String(key))) {
      key = keyArray.length-1
    }
      window.localStorage.setItem(String(key), `<!--****--><div class="taskDiv"><p class="taskP">${inputeValue}</p><button class="delete" data-key="${String(key)}">X</button></div><!--****-->`)
    keyArray.push(key)
    window.localStorage.keyArray = keyArray
    taskes.innerHTML += window.localStorage.getItem(key)
    key++
    inputeValue = "";
    }
  });
//display function
let display = function () {
  if (window.localStorage.getItem("keyArray").split(",").length > 1) {
    taskes.innerHTML=""
    for (let i = 1; i < window.localStorage.getItem("keyArray").split(",").length ; i++){
      taskes.innerHTML += window.localStorage.getItem(window.localStorage.getItem("keyArray").split(",")[i])
      console.log(i)
    }
    console.log(taskes.innerHTML)
  }
}
document.addEventListener("DOMContentLoaded", _ =>display())
//delete Event :3
taskes.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    window.localStorage.removeItem(e.target.dataset.key)
    keyArray = window.localStorage.getItem("keyArray").split(",")
    let index = e.target.dataset.key
    let newArray =keyArray.filter(e=>e !== index)
    window.localStorage.keyArray = newArray
    e.target.parentElement.remove();
  }
})*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// V2 maybe not woriking correctly //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////