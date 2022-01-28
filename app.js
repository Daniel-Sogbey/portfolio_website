require("./db/dbconfig");

//core modules
const path = require("path");

//npm modules
const express = require("express");
const pug = require("pug");
const bodyParser = require("body-parser");

//routers
const paymentRouter = require("./routes/payment");

const app = express();

//body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//pug and static file serving setup
app.set("view engine", pug);
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public/")));

//use routers

app.use(paymentRouter);

//home route
app.get("/", (req, res) => {
	console.log(req.body);
	res.render(`index.pug`);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
