const router = require("express").Router();
let Wallet = require("../../db/models/wallet.model").Wallet;

// Get all wallet
router.route("/").get((req, res) => {
	Wallet.find()
		.then((wallet) => res.json(wallet))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Get specific wallet
router.route("/:id").get((req, res) => {
	const id = req.params.id;
	Wallet.findById(id, (err, wallet) => {
		if (err) res.status(400).json("Error: " + err);
		res.json(wallet);
	});
});

// Create new wallet
router.route("/").post((req, res) => {
	const newUser = new Wallet(req.body);
	newUser
		.save()
		.then(() => res.json("Wallet user added."))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Update a specific wallet
router.route("/:id").put(async (req, res) => {
	const id = req.params.id;
	try {
		let updatedUser = await Wallet.findByIdAndUpdate(id, req.body, {
			"new": true,
			useFindAndModify: false,
		});
		res.json(updatedUser);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Delete a wallet
router.route("/:id").delete(async (req, res) => {
	const id = req.params.id;
	try {
		const deletedUser = await Wallet.findByIdAndDelete(id);
		res.json(deletedUser);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

module.exports = router;
