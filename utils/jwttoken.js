const jwt = require("jsonwebtoken");

// Creating function to create and store token in cookie

const sendToken = (user, statusCode, res) => {
	const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

	res.status(statusCode).json({ success: true, message: "Logged in Successfully.", token: token, user: user });
};

module.exports = sendToken;
