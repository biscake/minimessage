const express = require("express");
const path = require("node:path");
const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

app.get('/about', (req, res) => {
  res.render('about', {links: links});
})

app.get("/", (req, res) => {
  res.render("index", { users: users, links: links });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});