function showSuccessMessage() {
  document.getElementById("success-message").style.display = "block";
}

function closeSuccessMessage() {
  var emailInput = document.getElementById("email-input");
  document.getElementById("success-message").style.display = "none";
  emailInput.value = "";
}

function closePage() {
  window.close();
}

var emailInput = document.getElementById("email-input");
var subscribeBtn = document.querySelector(".subscribe-btn");

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    subscribeBtn.disabled = false;
  } else {
    subscribeBtn.disabled = true;
  }
});
