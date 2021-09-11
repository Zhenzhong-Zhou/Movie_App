import Movie from "./../models/movie.js";

// CREATE
export const create = async (req, res) => {
	if (req.user.isAdmin) {
		const createMovie = new Movie(req.body);
		try {
			const newMovie = await createMovie.save();
			res.status(201).json(newMovie);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot CREATE movie!");
	}
};
// UPDATE
export const update = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,
				{$set: req.body}, {new: true});
			res.status(200).json(updatedMovie);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot UPDATE movie!");
	}
};
// DELETE
export const remove = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id);
			res.status(200).json("Movie has been DELETED!");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot DELETE movie!");
	}
};
// FIND
export const find = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		res.status(200).json(movie);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH RANDOM
export const fetch_random = async (req, res) => {
	const type = req.query.type;
	let movie;
	try {
		if (type === "series") {
			movie = await Movie.aggregate([
				{$match: {isSeries: true}},
				{$sample: {size: 1}}
			]);
		} else {
			movie = await Movie.aggregate([
				{$match: {isSeries: false}},
				{$sample: {size: 1}}
			]);
		}
		res.status(200).json(movie);
	} catch (error) {
		res.status(500).json(error);
	}
};