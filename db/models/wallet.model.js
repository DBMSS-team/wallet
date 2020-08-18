const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const walletSchema = new Schema(
	{
		amount: { type: Decimal128, required: true },
	},
	{
		timestamps: true,
	}
);

const walletHistorySchema = new Schema(
	{
		payment_id: { type: String, required: true },
		amount: { type: Decimal128, required: true },
	},
	{
		timestamps: true,
	}
);

const Wallet = mongoose.model('Wallet', walletSchema);
const WalletHistory = mongoose.model('WalletHistory', walletHistorySchema);

module.exports = { Wallet, walletSchema, WalletHistory, walletHistorySchema };
