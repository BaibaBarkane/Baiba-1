// TODO app (dienas planotaju)

const taskAdder = document.querySelector(".taskAdder");
let myTasks = document.getElementById(".myTasks");
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);

function renderTask() {
  let html = tasks.map(function (data, i) {
    let myClass = data.done ? "done" : "";
    return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
  });
  myTasks.innerHTML = html.join("");
}

function addTask(event) {
  event.preventDefault();
  const textTask = this.querySelector("[name=task]").value;
  const task = {
    textTask,
    done: false,
  };
  taskList.push(task);
  saveToLocalStorage();
  renderTask();
  this.reset();
}

function saveToLocalStorage() {
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
