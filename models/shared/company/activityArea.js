const mongoose = require('mongoose');

const collection = 'activityArea';

module.exports = mongoose.model(
	collection,
	new mongoose.Schema({
		name: { type: String, required: true },
	})
);
