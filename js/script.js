// 1. Dark mode button: add or remove the class "dark" on <body>.
var toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function () {
  var isDark = document.body.classList.toggle("dark");
  toggleButton.setAttribute("aria-pressed", isDark);
  toggleButton.textContent = isDark ? "Light mode" : "Dark mode";
});

// 2. Form: say hello with the name the visitor typed.
var form = document.getElementById("contact-form");
var hello = document.getElementById("hello");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    hello.textContent = "Please fill in both your name and your email.";
    return;
  }

  hello.textContent = "Hello, " + name + "! Thanks for stopping by.";
  form.reset();
});
