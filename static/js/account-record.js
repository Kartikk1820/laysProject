document.addEventListener("DOMContentLoaded", function () {
  // Get the buttons
  const allTypesBtn = document.getElementById("allTypesBtn");
  const withdrawalsBtn = document.getElementById("withdrawalsBtn");
  const rechargeBtn = document.getElementById("rechargeBtn");

  // Get all the record containers
  const incomeRecords = document.querySelectorAll(".incomeRecord");
  const withdrawalRecords = document.querySelectorAll(".withdrawalRecord");
  const rechargeRecords = document.querySelectorAll(".rechargeRecord");

  // Function to remove 'active' class from all buttons
  function clearActiveClass() {
    allTypesBtn.classList.remove("active");
    withdrawalsBtn.classList.remove("active");
    rechargeBtn.classList.remove("active");
  }

  // Helper function to toggle visibility of multiple elements
  function toggleDisplay(records, displayStyle) {
    records.forEach(function (record) {
      record.style.display = displayStyle;
    });
  }

  // Show all types when "All types" button is clicked
  allTypesBtn.addEventListener("click", function () {
    toggleDisplay(incomeRecords, "flex");
    toggleDisplay(withdrawalRecords, "flex");
    toggleDisplay(rechargeRecords, "flex");
    clearActiveClass();
    allTypesBtn.classList.add("active");
  });

  // Show only withdrawals
  withdrawalsBtn.addEventListener("click", function () {
    toggleDisplay(incomeRecords, "none");
    toggleDisplay(withdrawalRecords, "flex");
    toggleDisplay(rechargeRecords, "none");
    clearActiveClass();
    withdrawalsBtn.classList.add("active");
  });

  // Show only recharge
  rechargeBtn.addEventListener("click", function () {
    toggleDisplay(incomeRecords, "none");
    toggleDisplay(withdrawalRecords, "none");
    toggleDisplay(rechargeRecords, "flex");
    clearActiveClass();
    rechargeBtn.classList.add("active");
  });

  // Show all types by default (without clicking)
  toggleDisplay(incomeRecords, "flex");
  toggleDisplay(withdrawalRecords, "flex");
  toggleDisplay(rechargeRecords, "flex");
});
