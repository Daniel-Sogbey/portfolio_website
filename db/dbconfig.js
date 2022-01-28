const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/payments";

const options = { useNewUrlParser: true };

mongoose
	.connect(url, options)
	.then(() => console.log("db connected successfully"))
	.catch(err => console.log(err, "db connection error"));
