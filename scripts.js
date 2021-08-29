const toggleDiv = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

toggleDiv.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
