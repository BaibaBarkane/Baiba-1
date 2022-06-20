const taskAdder = document.querySelector(".taskAdder");
const myTasks = document.querySelector(".myTasks");
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);

renderTask();

function saveToLocalStorage(task) {
  tasks.push(task);
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function addTask(e) {
  e.preventDefault();
  const textTask = this.querySelector("[name=task]").value;
  const task = {
    textTask: newTask,
    done: false,
  };
  saveToLocalStorage(task);
}

tasks.push(task);
saveToLocalStorage();
renderTask();
this.reset();

function renderTask() {
  let tasksToRender = [];
  tasks.forEach((item, i) => {
    if (item.done === true) {
      let eachTask = `<li data-index='${i}'>
                            <div class="done">
                            ${item.textTask}<span class="remove" id="delete"> ❌ </span>
                            </div>
                            </li>`;
      tasksToRender.push(eachTask);
    } else {
      let eachTask = `<li data-index='${i}'>
                            <div class="todo">
                            ${item.textTask}<span class="remove" id="delete"> ❌ </span>
                            </div>
                            </li>`;
      tasksToRender.push(eachTask);
    }
  });
  taskContainer.innerHTML = tasksToRender.join("");
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
    tasks[mySel.dataset.index].done = !task[mySel.dataset.index].done;
  }
  saveToLocalStorage();
  renderTask();
}
