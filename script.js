function generateQR() {
  const input = document.getElementById("urlInput").value;
  const qrImage = document.getElementById("qrImage");
  const downloadBtn = document.getElementById("downloadBtn");

  if (input.trim() === "") {
    alert("Please enter a valid URL");
    return;
  }

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=150x150`;

  // Show QR image
  qrImage.src = apiUrl;

  // Set download link
  downloadBtn.href = apiUrl;
}
