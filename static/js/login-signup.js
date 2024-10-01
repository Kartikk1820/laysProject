// JavaScript to toggle between Login and Register forms and update button colors
document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";

  // Debugging: Check if the class is added
  console.log("Login button clicked");

  // Add active class to Login button and remove from Register button
  this.classList.add("active-btn");
  document.getElementById("registerBtn").classList.remove("active-btn");
});

document.getElementById("registerBtn").addEventListener("click", function () {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";

  // Add active class to Register button and remove from Login button
  this.classList.add("active-btn");
  document.getElementById("loginBtn").classList.remove("active-btn");
});
