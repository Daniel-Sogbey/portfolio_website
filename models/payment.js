const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	}
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
