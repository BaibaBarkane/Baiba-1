// TODO app (dienas planotaju)
// Nokopejiet šo mapi savas majas darba mape
// Aplikacijas darbas principi var apskatit video appDemo.mp4

/* Mums nepieciešams izviedot nelielu todo aplikaciju ar iespeju pievienot izdzest un atziment izdarito notikumu
 */
const taskAdder = document.querySelector(".taskAdder");
const myTasks = document.querySelector(".myTasks");
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
// gan kad ir dati, gan kad nav

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);
//otrs domāts, lai nomainītu statusu - spiežot uz krustiņu

function renderTask() {
  //lai izvadītu datus vajadzīgajā vietā
  let html = tasks.map(function (data, i) {
    //var arī ar forEach ciklu - šis ir map
    let myClass = data.done ? "done" : "";

    //ja true klasi definē par done,

    return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
  });
  myTasks.innerHTML = html.join("");
}

function addTask(e) {
  e.preventDefault();
  const textTask = this.querySelector("[name=task]").value;
  //[name=task] vietā var definēt vai id, vai klasi,ja būtu definēts html

  const task = {
    textTask,
    done: false,
  };
  tasks.push(task);
  saveToLocalStorage();
  renderTask();

  this.reset();
  // restartē elementu
}

function saveToLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function toggleDone(e) {
  const myxEl = e.targets;
  const mySel = myEl.parentElement;

  if (myEl.className === "remove") {
    //lai pārliecinātos, kas nospiests - atzīmēts kā done- vai spiests uz el vai krustiņu

    let index = mySel.parenetElement.dataset.index;

    let = temp = tasks.splice(index, 1);
    //lai saprastu,kāds elements nospiests

    console.log(temp);
    //temp saglabā masīvu ar izejas vērtību
  } else {
    myEl.classList.toggle("done");
    //ja nozpiež done nevis remove
    tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done;
    //aizvieto if :
    //    if (tasks[4].done === true) {
    //ja ceturtais el === ar true\
    //        tasks[4].done===false...
  }
  saveToLocalStorage();
  renderTask();
}
