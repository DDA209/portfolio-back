const mongoose = require('mongoose');

const collection = 'user';

module.exports = mongoose.model(
	collection,
	new mongoose.Schema({
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		birthDate: { type: Date, required: true, max: Date.now() },
		email: { type: String, required: true, validate },
		emailVerified: { type: Boolean, required: true, default: false },
		password: {
			seed: { type: String, required: true },
			hash: { type: String, required: true },
		},
		visibility: {
			public: { type: Boolean, required: true, default: false },
			hidden: { type: Boolean, required: true, default: false },
		},
		// displayed on the site
		// firstName
		// lastName
		// email
		locations: [
			{
				name: { type: String, required: true },
				zipCode: { type: String, required: true },
			},
		],
		title: { type: String, required: true },
		description: { type: String, required: false }, // about me
		networks: {
			name: { type: String, required: true },
			domainUrl: {
				type: String,
				required: true,
				validate: /(https|http):\/\//,
			},
			logo: {
				type: String,
				required: true,
				default: './images/companies/logo-default.png',
			},
		},
	})
);
