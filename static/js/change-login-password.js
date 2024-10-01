const loginBtn = document.getElementById("login-password-btn");
const withdrawBtn = document.getElementById("withdraw-password-btn");
const loginPasswordSection = document.getElementById("login-password-section");
const withdrawPasswordSection = document.getElementById(
  "withdraw-password-section"
);

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  withdrawBtn.classList.remove("active");
  loginPasswordSection.style.display = "block";
  withdrawPasswordSection.style.display = "none";
});

withdrawBtn.addEventListener("click", () => {
  withdrawBtn.classList.add("active");
  loginBtn.classList.remove("active");
  withdrawPasswordSection.style.display = "block";
  loginPasswordSection.style.display = "none";
});
