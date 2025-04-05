// public/script.js
document.getElementById('qrForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from reloading page
  
    const url = document.getElementById('urlInput').value;
  
    if (url.trim() === '') {
      alert('Please enter a URL');
      return;
    }
  
    // Set QR image source to the backend GET route
    document.getElementById('qrImage').src = `/generate?url=${encodeURIComponent(url)}`;
  });
  

  document.getElementById('qrForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const url = document.getElementById('urlInput').value;
  
    if (url.trim() === '') {
      alert('Please enter a URL');
      return;
    }
  
    const qrImage = document.getElementById('qrImage');
    const downloadBtn = document.getElementById('downloadBtn');
  
    const qrSrc = `/generate?url=${encodeURIComponent(url)}`;
  
    // Set QR code image source
    qrImage.src = qrSrc;
  
    // Update download button
    downloadBtn.href = qrSrc;
    downloadBtn.style.display = 'inline-block';
  });
  