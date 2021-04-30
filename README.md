# OCR-Website

Jøran Jøsang: JavaScript\
Vegard Hjerpaasen: JavaScript\
Sondre Alvestad: JavaScript\
Martin Hodne: HTML and CSS\
Christoffer Rustad: HTML and CSS

Hosting the OCR service requires Node.js to be installed on the host computer. Node.js can be found here. We used the latest version (as of writing this, that is version 16.0.0) and can only assure compatibility with that version and, probably, later ones. Node.js allows for JavaScript to be ran in a console environment, instead of being ran in a web browser. It also allows for simple and easy library/framework integration and installation.

After having installed Node, you will have to install our project’s required packages: expressjs, multer and Tesseract.js. This can easily be done using Node’s package manager. Open the terminal/console/command line for your operating system and run the following commands:

npm install express

npm install multer

npm install tesseract.js

When all the required packages have been installed, you can start the server using Node by entering the command:

node script in the project’s root folder. for an example like this:

C:\Users\Jøran\OneDrive\PRO1000\OCR-Website>node script

If you want to modify or look at any of the code we have written, you can do so by opening the files in your favourite text editor/IDE.
