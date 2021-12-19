const mongoose = require('mongoose');

const collection = 'skill';

module.exports = mongoose.model(
	collection,
	new mongoose.Schema({
		name: { type: String, required: true },
		types: [{ type: String, required: true }],
	})
);
