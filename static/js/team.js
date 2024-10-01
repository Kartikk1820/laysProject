// Toggle button functionality
const toggleButtons = document.querySelectorAll(".btn-toggle");
const statSections = document.querySelectorAll(".daily-stats-section");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    toggleButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Hide all stat sections
    statSections.forEach((section) => (section.style.display = "none"));

    // Show the corresponding section
    const targetSection = button.getAttribute("data-target");
    document.querySelector(`.${targetSection}`).style.display = "block";
  });
});
