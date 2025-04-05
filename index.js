import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import path from 'path';

inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    // Create write stream to 'public/qr_img.png'
    const qr_svg = qr.image(url);
    const filePath = path.join('public', 'qr_img.png');
    qr_svg.pipe(fs.createWriteStream(filePath));

    // Save URL text for reference (optional)
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('QR code saved to public/qr_img.png');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in this environment.");
    } else {
      console.log("Something went wrong:", error);
    }
  });
