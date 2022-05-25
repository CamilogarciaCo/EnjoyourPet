//// tener instalado node////
/// correr en terminal del proyecto
npm init --y
npm install nodemon --save-dev
npm install express --save
npm install ejs////


*****
caer el archivo app.js
======
const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'))

app.set("view engine", "ejs")

app.listen(port, () => {
  console.log("Levantando el Servidor");
});

app.get("/", (req, res) => {
    res.render("index")
  });
******