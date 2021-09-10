import CryptoJS from "crypto-js";
import User from "../models/user.js";

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