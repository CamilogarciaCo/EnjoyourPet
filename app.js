const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'))

app.set("view engine", "ejs")

app.listen(port, () => {
  console.log("Levantando el Servidor");
});

// rutas
app.get("/", (req, res) => {
    res.render("index")
  });

app.get('/register', (req, res) => {
  res.render("register")
})
/*
app.get("/nosotros", (req, res) => {
    res.render("nosotros")
})
app.get("/contactanos", (req, res) => {
  res.render("contactanos")
})*/
