import List from "../models/list.js";

// CREATE
export const create = async (req, res) => {
	if (req.user.isAdmin) {
		const createList = new List(req.body);
		try {
			const newList = await createList.save();
			res.status(201).json(newList);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot CREATE list!");
	}
};