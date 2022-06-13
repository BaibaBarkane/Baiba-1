// TODO app (dienas planotaju)

let taskAdder = document.querySelector(".taskAdder");
let myTasksContainer = document.getElementById(".myTasks");
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);

function saveToLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

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
  myTasksContainer.innerHTML = tasksToRender.join("");
}

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

function toggleDone(e) {
  const myEl = e.target;
  const mySel = myEl.parentElement;
  if (myEl.className === "remove") {
    let index = mySel.parentElement.dataset.index;
    let temp = tasks.splice(index, 1);
    console.log(temp);
  } else {
    myEl.classList.toggle("done");
    tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done;
  }
  saveToLocalStorage();
  renderTask();
}
