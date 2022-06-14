// TODO app (dienas planotaju)

const taskAdder = document.querySelector(".taskAdder");
let myTasks = document.getElementById(".myTasks");
const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

taskAdder.addEventListener("submit", addTask);
renderTask();

myTasks.addEventListener("click", toggleDone);

function renderTask() {
  let task = localStorage.getItem("task");
  if (task === null) {
    taskListArray = [];
  } else {
    taskListArray = JSON.parse(task);
  }
  let htmlCode = "";
  taskListArray.forEach((list, ind) => {
    return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
  });
  myTasks.innerHTML = task.join("");
}

function addTask(event) {
  event.preventDefault();
  const textTask = this.querySelector("[name=task]").value;
  const task = {
    textTask,
    done: false,
  };
  saveToLocalStorage(task);
  renderTask();
  this.reset();
}

function saveToLocalStorage(task) {
  taskList.push(task);
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function toggleDone(event) {
  const myEl = event.targets;
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
taskAdder.addEventListener("submit", addTask);
renderTask();

myTasks.addEventListener("click", toggleDone);
