module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		email: { type: DataTypes.STRING, allowNull: false, primarykey: true, unique: true },
		password: { type: DataTypes.STRING, allowNull: false },
		user_role: { type: DataTypes.STRING, defaultValue: "user" },
		jwttoken: { type: DataTypes.STRING },
		is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
	});
	return User;
};
