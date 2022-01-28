const path = require("path");
const express = require("express");
const pug = require("pug");

const app = express();

app.set("view engine", pug);
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public/")));

app.get("/", (req, res) => {
	res.render(`index.pug`);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
