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
		res.status(403).json("Cannot create movie!!");
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
		res.status(403).json("Cannot updated movie!!");
	}
};
// DELETE
export const remove = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id);
			res.status(200).json("Movie has been deleted!");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot DELETE movie!");
	}
};