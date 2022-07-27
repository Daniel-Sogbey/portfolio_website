require("./db/dbconfig");
require("dotenv").config();
//core modules
const path = require("path");

//npm modules
const express = require("express");
const pug = require("pug");
const bodyParser = require("body-parser");
//routers
const paymentRouter = require("./routes/payment");
const shopRouter = require("./routes/shop");

const app = express();

//body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//pug and static file serving setup

// app.engine("pug", require("pug").__express);

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public/")));

//use routers
app.use(paymentRouter);
app.use(shopRouter);

//home route
app.get("/", (req, res) => {
	res.render(`index.pug`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
