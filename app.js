const feedbackContainer = document.querySelector(".feedback-container");
const sendFeedback = document.querySelector("#send-feedback");
const feedbackMessage = document.querySelector(".feedback-message");
const emojiContainer = document.querySelector(".emoji-container");
const ratings = document.querySelectorAll(".raiting");
const feedbackSmile = document.querySelector(".feedback-smile");

let selectedRating;

emojiContainer.addEventListener("click", (e) => {
  ratings.forEach((item) => {
    item.classList.remove("active");
  });
  selectedRating = e.target.closest(".raiting");
  selectedRating.classList.add("active");
});

sendFeedback.addEventListener("click", () => {
  if (selectedRating) {
    feedbackContainer.classList.add("hidden");
    feedbackMessage.classList.remove("hidden");
    feedbackSmile.textContent = `Feddback:${selectedRating.textContent}`;
  } else {
    return;
  }
});
