//copy invitation code and link
function copyText(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to clipboard");
    })
    .catch((err) => {
      alert("Failed to copy text");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the canvas and context
  let canvas = document.getElementById("qrCanvas");
  let ctx = canvas.getContext("2d");

  // Create a new image element
  let qrImage = new Image();
  qrImage.src = "/image/qr-code.jpg"; // Path to your QR code image

  // When the image has loaded, draw it on the canvas
  qrImage.onload = function () {
    // Draw the image on the canvas, scaled to fit
    ctx.drawImage(qrImage, 0, 0, canvas.width, canvas.height);
  };
});
