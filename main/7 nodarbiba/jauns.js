const taskAdder = document.querySelector(".taskAdder");
const myTasks = document.querySelector(".myTasks");

//Use localStorage to store todos
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

// Check if there is any todo in localStorage and add them to the list
if (tasks) {
  tasks.forEach((tasks) => addTask(tasks));
}

// Add todo on enter key press
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

// Create a function to add todo to the list
function addTask(task) {
  let taskText = input.value;
  if (task) {
    taskText = task.text;
  }
  if (taskText) {
    // Create a li for adding the todo list
    const taskEl = document.createElement("li");
    if (task && task.completed) {
      //Add completed class to the li
      taskEl.classList.add("completed");
    }
    taskEl.innerText = taskText;
    //Add click event listener to the li to toggle the completed class
    taskEl.addEventListener("click", () => {
      taskEl.classList.toggle("completed");
      addtask();
    });
    //Add delete event listener to the li to delete the li
    taskEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      taskEl.remove();
      addTask();
    });
    //Add the li to the existng list
    tasksList.appendChild(taskEl);
    input.value = "";
    //Update the localStorage
    addTask();
  }
}

function adTask() {
  //Get all the todos from the list
  taskEl = document.querySelectorAll("li");
  const tasks = [];
  //Loop through the todos and add them to the todos array
  taskEl.forEach((taskkEl) => {
    tasks.push({
      text: taskEl.innerText,
      completed: taskEl.classList.contains("completed"),
    });
  });
  //Store the todos in the localStorage and stringify it
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
