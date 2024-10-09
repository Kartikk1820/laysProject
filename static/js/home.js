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

document.addEventListener("DOMContentLoaded", function () {
  // Disable all elements in card B
  const cardsB = document.querySelectorAll("#cardsB .card");
  cardsB.forEach((card) => {
    disableCard(card);
  });

  // Disable all elements in card A except the specific ones with 480.0 and 1970.0
  const cardsA = document.querySelectorAll("#cardsA .card");
  cardsA.forEach((card) => {
    const priceDivs = card.querySelectorAll(".pricesDiv .value");

    let shouldDisable = true; // Flag to determine if we should disable the card

    priceDivs.forEach((priceDiv) => {
      if (
        priceDiv.innerHTML.includes("&nbsp;480.0") ||
        priceDiv.innerHTML.includes("&nbsp;1970.0")
      ) {
        shouldDisable = false; // Do not disable if specific value is found
      }
    });

    if (shouldDisable) {
      disableCard(card); // Disable card if neither value was found
    }
  });

  // Helper function to disable all inputs, buttons, and elements within a card
  function disableCard(card) {
    const elements = card.querySelectorAll(
      "input, button, select, textarea, a"
    );

    elements.forEach((element) => {
      element.disabled = true; // Disable input elements
      element.style.pointerEvents = "none"; // Prevent clicks on anchor tags
      element.classList.add("disabled-element"); // Add a class for disabled styling
    });

    card.style.opacity = "0.5"; // Optional: visually indicate the card is disabled
  }
});
