const mongoose = require('mongoose');

const collection = 'company';

module.exports = mongoose.model(
	collection,
	new mongoose.Schema({
		name: { type: String, required: true },
		activityArea: { type: String, required: true },
		logo: {
			type: String,
			required: true,
			default: './images/companies/logo-default.png',
		},
	})
);
