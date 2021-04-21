module.exports = function(sequelize, DataTypes) {
	const Subscriptions =  sequelize.define(
		"subscriptions",
		{
			id: {
				type: DataTypes.INTEGER(3).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: "id"
			},
			subscriptionId: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "subscriptionId"
			},
			planId: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "planId"
			},
			subscriptionLink: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "subscriptionLink"
			},
			status: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "status"
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: "",
				field: "name"
			},
			description: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "description"
			},
			active: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
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
			nextDueOn: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "nextDueOn"
			},
			userId_FK:{
				type:DataTypes.INTEGER(11).UNSIGNED,
				allowNull:false,
				field:"userId_FK"
			}
		},
		{
			tableName: "subscriptions"
		}
	);
	Subscriptions.associate = function(models){
		Subscriptions.belongsTo(models.user,{
			foreignKey : "userId_FK",
			onDelete : "CASCADE"
		});
	};
	return Subscriptions;
};
