const path = require("path");
const express = require("express");
const pug = require("pug");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", pug);
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public/")));

app.get("/", (req, res) => {
	console.log(req.body);
	res.render(`index.pug`);
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.render(`index.pug`);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
