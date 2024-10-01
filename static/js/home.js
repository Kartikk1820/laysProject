//plans toogle button
const optionAButton = document.getElementById("optionA");
const optionBButton = document.getElementById("optionB");
const cardsA = document.getElementById("cardsA");
const cardsB = document.getElementById("cardsB");

optionAButton.addEventListener("click", () => {
  optionAButton.classList.add("active");
  optionBButton.classList.remove("active");
  cardsA.classList.remove("hidden");
  cardsB.classList.add("hidden");
});

optionBButton.addEventListener("click", () => {
  optionBButton.classList.add("active");
  optionAButton.classList.remove("active");
  cardsB.classList.remove("hidden");
  cardsA.classList.add("hidden");
});
