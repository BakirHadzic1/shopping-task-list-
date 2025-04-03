var items = []; // staviti let 
var tasks = []; // staviti let 

function addItem() {
  let input = document.getElementById("itemInput");
  let item = input.value;
  if (item != "") items.push({ name: item, bought: false });
  input.value = "";
  renderItems();
}

function renderItems() {
  document.getElementById("shoppingList").innerHTML = "";
  for (var i = 0; i <= items.length; i++) {     //staviti let
    let itemElement = document.createElement("div");
    itemElement.className = "item";

    if (items[i].bought == true) {  // treba staviti tri jednaka
      itemElement.classList.add("bought");
    }

    itemElement.innerHTML =
      "<span>" +
      items[i].name +
      "</span><button onclick='toggleBought(" +
      i +
      ")'>Toggle Bought</button><button onclick='deleteItem(" +
      i +
      ")'>Delete</button>";

    document.getElementById("shoppingList").appendChild(itemElement);
  }
}

function toggleBought(index) {
  items[index].bought = !items[index].bought;
  renderItems();
}

function deleteItem(index) {
  items.splice(index);// treba biti splice(index,1)
  renderItems();
}

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;
  if (task != "") tasks.push({ name: task, completed: false });
  input.value = "";
  renderTasks();
}


function renderTasks() {
  document.getElementById("taskList").innerHTML = "";
  for (var i = 0; i <= tasks.length; i++) { // staviti let
    let taskElement = document.createElement("div");
    taskElement.className = "task";

    if (tasks[i].completed == true) { //staviti trii jednaka
      taskElement.classList.add("completed");
    }

    taskElement.innerHTML =
      "<span>" +
      tasks[i].name +
      "</span><button onclick='toggleCompleted(" +
      i +
      ")'>Complete</button><button onclick='deleteTask(" +
      i +
      ")'>Delete</button>";

    document.getElementById("taskList").appendChild(taskElement);
  }
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index);// treba splice(index,1)
  renderTasks();
}


window.onload = function () {
  renderItems();
  renderTasks();
};
