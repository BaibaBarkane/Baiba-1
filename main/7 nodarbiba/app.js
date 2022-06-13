// TODO app (dienas planotaju)

let taskAdder = document.querySelector("taskAdder");
let myTasksContainer = document.getElementById("myTasks");
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

function saveToLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);

function renderTask() {
  letTaskToRender = [];
  taskList.forEach((item, i) => {
    let isTaskChecked = (item = done ? "checked" : "");
    let task = "";
    tasksToRender.push(task);
    return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
  });

  function addTask(event) {
    event.preventDefault();
    const task = {
      textTask: taskInput.value,
      done: false,
    };
    taskList.push(task);
    saveToLocalStorage();
    renderTask();
    this.reset;
  }

  myTasksContainer.innerHTML = tasksToRender.join("");

  renderTask();

  function toggleDone(e) {}
}
