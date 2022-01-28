const paystack = request => {
	const initializeTransaction = (form, mycallback) => {
		const options = {
			url: "https://api.paystack.co/transaction/initialize",
			method: "POST",
			headers: {
				authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
				"Content-Type": "application/json",
				"Cache-Control": "no-cache"
			},
			form
		};

		const callback = (error, response, body) => {
			return mycallback(error, body);
		};

		request.post(options, callback);
	};

	const verifyTransaction = (ref, mycallback) => {
		const options = {
			url:
				"https://api.paystack.co/transaction/verify/" + encodeURIComponent(ref),
			headers: {
				authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
				"Content-Type": "application/json",
				"Cache-Control": "no-cache"
			}
		};

		const callback = (error, response, body) => {
			return mycallback(error, body);
		};

		request(options, callback);
	};

	return { initializeTransaction, verifyTransaction };
};

module.exports = paystack;
