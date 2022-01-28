const express = require("express");
// const mongoose = require("mongoose");
const request = require("request");
const {
	initializeTransaction,
	verifyTransaction
} = require("../paystack/paystack")(request);
const Payment = require("../models/payment");
const _ = require("lodash");

const router = express.Router();

router.post("/payment", async (req, res) => {
	const form = _.pick(req.body, ["amount", "email", "name"]);

	form.metadata = {
		name: form.name
	};

	form.amount *= 100;

	initializeTransaction(form, (error, body) => {
		if (error) return res.status(500).send(error);

		let response = JSON.parse(body);

		res.redirect(response.data.authorization_url);
	});
});

router.get("/paystack/callback", async (req, res) => {
	console.log(req.query, "query");
	const ref = req.query.reference;

	verifyTransaction(ref, (error, body) => {
		if (error) {
			return res.status(500).send({ error: "Transaction Unsuccessful" });
		}

		let response = JSON.parse(body);

		// console.log(response, "response");

		const data = _.at(response.data, [
			"reference",
			"amount",
			"customer.email",
			"metadata.name"
		]);

		console.log(data);

		[reference, amount, email, name] = data;

		payment = { reference, amount, email, name };

		Payment.create(payment)
			.then(payment => {
				if (payment) {
					res.status(200).send({ payment });
				}
			})
			.catch(err => res.status(500).send(err));
	});
});

module.exports = router;
