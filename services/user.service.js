const bcrypt = require("bcryptjs");
const { User } = require("../models/index");

const insert_user_service = async (email, password, user_role, is_active) => {
	const result = await User.create({
		email: email,
		password: password,
		user_role: user_role,
		is_active: is_active,
	});
	return result;
};

const get_all_user_service = async () => {
	const result = await User.findAll();
	return result;
};

const get_single_user_service = async (email) => {
	const result = await User.findOne({ email: email });
	return result;
};

const update_user_service = async (email, user_role, is_active) => {
	const result = await User.update(
		{
			user_role: user_role,
			is_active: is_active,
		},
		{ where: { email: email } }
	);
	return result;
};

const delete_user_service = async (email) => {
	const result = await User.destroy({ where: { email: email } });
	return result;
};

const login_user_service = async (email, password) => {
	const result = await User.findOne({ email: email });
	if (result && result.email) {
		const is_correct = await bcrypt.compare(password, result.password);
		if (is_correct) {
			return result;
		} else {
			return { error: "Password not match" };
		}
	} else {
		return { error: "User doesn't exists" };
	}
};

module.exports = {
	insert_user_service,
	get_all_user_service,
	get_single_user_service,
	update_user_service,
	delete_user_service,
	login_user_service,
};
