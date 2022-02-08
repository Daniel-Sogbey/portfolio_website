const addToCart = document.querySelector("#addToCart");

addToCart.addEventListener("click", () => {
	console.log("Item added to cart");

	fetch("http://localhost:3000/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
		// body: JSON.stringify({
		// user_id: 1,
		// product_id: 1
		// })
	})
		.then(response => {
			window.location.href = "/";
			// response.json();
			// console.log(response.json());
		})
		.then(data => console.log(data))
		.catch(err => console.log(err));
});

//fetch and redirect to cart page
