const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const Catch = require("../utils/catch");

const auth = Catch(async (req, res, next) => {
	let authorization = req.headers.authorization.split(" ")[1];

	if (!authorization) {
		return res.status(401).json({ error: "You are not Logged In !!" });
	}

	const decodedData = jwt.verify(authorization, process.env.JWT_SECRET);

	const { dataValues } = await User.findOne({ email: decodedData.email });

	if (dataValues && dataValues.email) {
		req.user = dataValues;
		next();
	} else {
		return res.status(401).json({ error: "You're not authorized !!" });
	}
});

module.exports = auth;
