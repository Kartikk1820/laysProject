// Hide and View Balance
document.addEventListener("DOMContentLoaded", function () {
  const eyeIcon = document.getElementById("eye-icon");
  const balanceValue = document.getElementById("balance-value");

  eyeIcon.addEventListener("click", function () {
    // Toggle visibility of balance value
    if (balanceValue.style.display === "none") {
      balanceValue.style.display = "block"; // Show the value
    } else {
      balanceValue.style.display = "none"; // Hide the value
    }
  });
});
