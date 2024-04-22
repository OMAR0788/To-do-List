const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", addTask);
let tasks = [];

function addTask() {
  const textInput = document.querySelector(".textFiled");
  if (textInput.value)
    document.querySelector(
      ".toDoListTasks"
    ).innerHTML += `<li><input type="checkbox" />${textInput.value}</li>`;
  checkTask();
}

function checkTask() {
  tasks = document.querySelectorAll(".toDoListTasks li");
  tasks.forEach((li) => {
    const checkbox = li.querySelector("input");
    checkbox.addEventListener("change", markTask);
  });
}

function markTask(e) {
  const li = e.target.closest("li");
  if (e.target.checked) li.classList.add("done");
  else li.classList.remove("done");
}

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", clearCheckedTasks);

function clearCheckedTasks() {
  const tasks = document.querySelectorAll(".toDoListTasks li");
  tasks.forEach((li) => {
    const checkbox = li.querySelector("input");
    if (checkbox.checked) li.remove();
  });
}
