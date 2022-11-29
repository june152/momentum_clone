const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden";
const USERNAME = "username";
const isName = localStorage.getItem(USERNAME);

function paintGreeting(name) {
  loginForm.classList.add(HIDDEN);
  greeting.innerHTML = `Hello ${name}`;
  greeting.classList.remove(HIDDEN);
}

if (isName === null) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = loginInput.value;
    paintGreeting(name);
    localStorage.setItem(USERNAME, name);
  });
} else {
  paintGreeting(isName);
}
