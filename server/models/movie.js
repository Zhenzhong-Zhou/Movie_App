import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
		title: {type: String, required: true, unique: true},
		description: {type: String, max: 500},
		image: {type: String},
		imageTitle: {type: String},
		imageSmall: {type: String},
		trailer: {type: String},
		video: {type: String},
		year: {type: String, min: 4, max: 4},
		limit: {type: Number},
		genre: {type: String},
		isSeries: {type: Boolean, default: false}
	},
	{timestamps: true}
);

export default mongoose.model("Movie", movieSchema);