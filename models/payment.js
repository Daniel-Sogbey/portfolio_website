const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
	{
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
		},
		reference: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
