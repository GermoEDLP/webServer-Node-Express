require('dotenv').config();
const express = require("express");

const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// HBS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log});

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('home', {
      nombre: 'German Brassini',
      titulo: 'WebServerApp'
  });
});
app.get("/generic", (req, res) => {
  res.render('generic', {
      nombre: 'German Brassini',
      titulo: 'WebServerApp'
  });
});
app.get("/elements", (req, res) => {
  res.render('elements', {
      nombre: 'German Brassini',
      titulo: 'WebServerApp'
  });
});
app.get("*", (req, res) => {
  res.send("404 | Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
