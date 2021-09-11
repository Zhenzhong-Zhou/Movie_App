import CryptoJS from "crypto-js";
import User from "../models/user.js";

// UPDATE
export const update = async (req, res) => {
	if (req.user.id === req.params.id || req.user.isAdmin) {
		if (req.body.password) {
			req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
			res.status(200).json(updatedUser);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot update this account!");
	}
};
// DELETE
export const remove = async (req, res) => {
	if (req.user.id === req.params.id || req.user.isAdmin) {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json("User has been deleted!");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot delete this account!");
	}
};
// FIND
export const find = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const {password, ...info} = user._doc;
		res.status(200).json(info);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FIND ALL
export const find_all = async (req, res) => {
	const query = req.query.new;
	if (req.user.isAdmin) {
		try {
			const users = query ? await User.find().sort({_id: -1}).limit(10) : await User.find();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Invalid page!");
	}
};