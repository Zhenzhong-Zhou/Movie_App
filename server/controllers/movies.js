import Movie from "./../models/movie.js";

// CREATE
export const create = async (req, res) => {
	if (req.user.isAdmin) {

	} else {
		res.status(403).json("Cannot create movie!!");
	}
};