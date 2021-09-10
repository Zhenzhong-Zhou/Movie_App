import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
	try {
		const authHeader = req.headers.token;
		if (authHeader) {
			const token = authHeader.split(" ")[1];
			jwt.verify(token, process.env.SECRET_KEY_TOKEN, (error, user) => {
				if (error) res.status(403).json("Invalid token!");
				req.user = user;
				next();
			});
		} else {
			return res.status(401).json("Invalid authenticated!");
		}
	} catch (error) {

	}
};