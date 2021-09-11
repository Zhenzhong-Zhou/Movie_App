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
// DELETE
export const remove = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await List.findByIdAndDelete(req.body.id);
			res.status(201).json("List has been DELETED!");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot CREATE list!");
	}
};