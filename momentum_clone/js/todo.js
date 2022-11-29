const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

function submit({ text, id }) {
  const li = document.createElement("li");
  li.id = id;
  const span = document.createElement("span");
  span.innerText = text;
  const del = document.createElement("button");
  del.innerText = "❌";
  li.appendChild(span);
  li.appendChild(del);
  del.addEventListener("click", (e) => {
    const liDel = e.target.parentElement;
    toDos = toDos.filter((item) => item.id.toString() !== liDel.id);
    liDel.remove();
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  });
  toDos.push({ text: text, id: id });
  todoList.appendChild(li);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  if (parsedToDos.length) {
    parsedToDos.forEach((e) => {
      submit(e);
    });
  }
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submit({ text: todoInput.value, id: Date.now() });
  todoInput.value = "";
});
