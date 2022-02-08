const products = require("../data/products");

const express = require("express");

const router = express.Router();

router.get("/shop", (req, res) => {
	res.status(200).render("shop", { products });
});

module.exports = router;
