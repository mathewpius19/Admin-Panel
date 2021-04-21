module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"user",
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: "id"
			},
			authToken: {
				type: DataTypes.STRING(255),
				defaultValue: "",
				field: "authToken"
			},
			firstName: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "firstName"
			},
			lastName: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "lastName"
			},
			profilePhoto: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "profilePhoto"
			},
			clientId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: "clientId"
			},
			emailAddress: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "emailAddress"
			},
			emailVerified: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: "0",
				field: "emailVerified"
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "password"
			},
			lastLoginDate: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "lastLoginDate"
			},
			language: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				defaultValue: "1",
				field: "language"
			},
			bio: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "bio"
			},
			location: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "location"
			},
			website: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "website"
			},
			active: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: "1",
				field: "active"
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "createdAt"
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "updatedAt"
			},
		},
		{
			tableName: "user"
		}
	);

	User.associate = function (models) {
		User.hasMany(models.video, {

			foreignKey: "id"
		});
	};
	User.associate = function (models) {
		User.hasMany(models.subscriptions, {
			foreignKey: "id"
		});
	};

	return User;
};

