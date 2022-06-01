// TODO app (dienas planotaju)
// Nokopejiet šo mapi savas majas darba mape
// Aplikacijas darbas principi var apskatit video appDemo.mp4

let taskList = [];
let addBtn = document.querySelector(".addBtn");

let taskAdder = document.querySelector("taskAdder");
let myTasksContainer = document.getElementById("myTasks");
taskList = JSON.parse(localStorage.getItem("taskList"));

const saveToLocalStorage = () => {
  localStorage.setItem(".taskList", JSON.stringify(taskList));
};

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let taskInput = document.querySelector(".taskInput");
  const textTask = taskInput.value.trim();
  if (textTask !== "") {
    addTask(textTask);
    taskInput.value = "";
    InputDeviceInfo.focus();
  }
});

function addTask(textTask) {
  const task = {
    textTask: taskInput.value,
    done: false,
  };
  taskList.push(task);
  saveToLocalStorage();
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

  //       4 - Gadijuma ja elements ir apziments ka izdarits mums nepiecišams pievienot klassi .done ../style.css
  //         Lidz ar to nepieciešams izveidot parbaudi if else lai parbaudit test.done === 'true'

  //  toggleDone() - atzimet ka izdarito
  //       Mums nepiecišams pievinot 2 eventListener
  //          addEventListener('submit', addTask);   ----> nostradas kad mes nospiedam pievinot pogu un izsaucam funkciju addTask
  //          addEventListener('click', toggleDone); ----> nostradas kad mes nospiedam uz elementu saraksta un izsaucam funkciju toggleDone

  /*             funkcija toogleDone dara divas darbibas
                 gadijuma ja bija nospiesta izdžešanas poga, mes izdesam elementu no localStorage izsaucam renderTask funkciju lai atjaunto sarakstu
                 gadijuma ja bija nospiest elements mes nomainam elementam done vertibu done: false --> done: true un izsaucam renderTask funkciju lai atjauno sarakstu
 */
  // addEventListener click
  // addEventListener submit

  renderTask();

  function toggleDone(e) {}
}
