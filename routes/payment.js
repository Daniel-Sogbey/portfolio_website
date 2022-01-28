const express = require("express");
// const mongoose = require("mongoose");
const Payment = require("../models/payment");

const router = express.Router();

router.post("/payment", async (req, res) => {
	const payment = new Payment(req.body);

	try {
		const pay = await payment.save();
		res.status(200).send({ payment: pay });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
	console.log(req.body, "req.body", "Payment Route");
	res.send("Payment received");
});

module.exports = router;
