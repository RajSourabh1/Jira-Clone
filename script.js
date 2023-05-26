// const openModalBtn = document.querySelector(".add-task-btn");
// const modal = document.querySelector(".modal");
// const closeModal = document.querySelector(".close");
// const addTaskForm = document.querySelectorById("add-task-form");

// const myBtn = document.querySelectorById("add-task-btn");

// openModalBtn.addEventListener("click", () => {
//     modal.style.display = "block";
// });


const openModalBtn = document.querySelector(".add-task-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addTaskForm = document.getElementById("add-task-form");

const myBtn = document.querySelector("#add-task-btn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

myBtn.addEventListener("click", (event) => {
  // standard code to prevent your page from reloading
  event.preventDefault();

  const taskName = document.getElementById("task-name").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const status = document.getElementById("status").value;

  addTask(taskName, priority, dueDate, status);
  modal.style.display = "none";
});

function addTask(taskName, priority, dueDate, status) {
  console.log(status);
  if (status == "not-started") {
    // add it in the column of not started
    var list = document.getElementById("not-started");
    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
  } else if (status == "in-progress") {
    // add it in the column of in-progress
    var list = document.getElementById("in-progress");
    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
  } else if (status == "completed") {
    // add it in the column of completed
    var list = document.getElementById("completed");
    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
  }

  // After successfully added ->

  // document.getElementById("task-name").value = "";
  // document.getElementById("priority").value = "";
  // document.getElementById("due-date").value = "";
  // document.getElementById("status").value = "";

  document.getElementById("add-task-form").reset();
}