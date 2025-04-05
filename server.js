// server.js
import express from 'express';
import qr from 'qr-image';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (index.html, script.js)
app.use(express.static(path.join(__dirname, 'public')));

// GET route to generate QR code
app.get('/generate', (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  const qr_png = qr.image(url, { type: 'png' });
  res.setHeader('Content-Type', 'image/png');
  qr_png.pipe(res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
