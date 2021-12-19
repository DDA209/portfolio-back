const mongoose = require('mongoose');

const collection = 'experience';

module.exports = mongoose.model(
	collection,
	new mongoose.Schema({
		userId: { type: mongoose.Schema.Types.ObjectId, required: true },
		dateStart: {
			type: Date,
			required: true,
			default: Date.now() - 1,
			min: this.dateEnd,
		},
		dateEnd: {
			type: Date,
			required: false,
			default: Date.now(),
			max: this.dateStart,
		},
		company: {
			name: { type: String, required: true },
			activityArea: { type: String, required: true },
			logo: { type: String, required: false },
		},
		clients: [
			{
				name: { type: String, required: true },
				activityArea: { type: String, required: true },
				logo: { type: String, required: false },
			},
		],
		locations: [
			{
				zipCode: ['75', '013'],
				city: 'Paris',
				canton: '',
				department: 'Paris',
				region: 'île de France',
				state: '',
				country: 'France',
			},
		],
	})
);
