const Catch = require("../utils/catch.js");
const bcrypt = require("bcryptjs");
const {
	insert_user_service,
	get_all_user_service,
	get_single_user_service,
	update_user_service,
	delete_user_service,
	login_user_service,
} = require("../services/user.service.js");
const sendToken = require("../utils/jwttoken.js");

const insert_user_controller = Catch(async (req, res, next) => {
	const { email, password, user_role, is_active } = req.body;

	const bcrypted_password = await bcrypt.hash(password, 10);

	const result = await insert_user_service(email, bcrypted_password, user_role, is_active);
	res.status(200).json({ result });
});

const get_all_user_controller = Catch(async (req, res, next) => {
	const result = await get_all_user_service();
	res.status(200).json({ result });
});

const get_single_user_controller = Catch(async (req, res, next) => {
	const { email } = req.body;
	const result = await get_single_user_service(email);
	res.status(200).json({ result });
});

const update_user_controller = Catch(async (req, res, next) => {
	const { email, user_role, is_active } = req.body;
	const result = await update_user_service(email, user_role, is_active);
	res.status(200).json({ result });
});

const delete_user_controller = Catch(async (req, res, next) => {
	const { email } = req.body;
	const result = await delete_user_service(email);
	res.status(200).json({ result });
});

const login_user_controller = Catch(async (req, res, next) => {
	const { email, password } = req.body;
	const result = await login_user_service(email, password);
	if (result && !result.error) {
		sendToken(result, 200, res);
	} else {
		res.status(200).json({ error: result.error });
	}
});

const logout_user_controller = Catch(async (req, res, next) => {
	res.cookie("token", null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});

	res.status(200).json({ success: true, message: "Logged Out Successfully." });
});

module.exports = {
	insert_user_controller,
	get_all_user_controller,
	get_single_user_controller,
	update_user_controller,
	delete_user_controller,
	login_user_controller,
	logout_user_controller,
};
