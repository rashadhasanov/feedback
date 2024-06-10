const container = document.querySelector(".container");
const button = document.querySelector("button");
const feedback = document.querySelector(".feedback");

button.addEventListener("click", () => {
  container.classList.add("hidden");
  feedback.classList.remove("hidden");
});
