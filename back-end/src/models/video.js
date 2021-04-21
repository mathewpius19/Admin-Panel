

module.exports= (sequelize, DataTypes)=>{


	const Video =  sequelize.define(
		"video",
		{
			id:{
				type:DataTypes.INTEGER(11).UNSIGNED,
				allowNull:false,
				autoIncrement:true,
				primaryKey:true,
				field:"id"
			},
			title:{
				type:DataTypes.STRING(20),
				unique:true,
				field:"title"

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
            
			description:{
				type:DataTypes.STRING(300),
				allowNull: true,
				field:"description"
			},
			thumbnail:{
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "thumbnail"
			},
			videoURL:{
				type: DataTypes.STRING(300),
				allowNull:true,
				field:"videoURL"
			},
			textScript:{
				type:DataTypes.STRING(600),
				allowNull:true,
				field:"textScript"
			},
			userId_FK:{
				type:DataTypes.INTEGER(11).UNSIGNED,
				allowNull:false,
				field:"userId_FK"
			}
		},
		{
			tableName:"video"
		}    
	);

	Video.associate = function(models){
		Video.belongsTo(models.user,{
			foreignKey : "userId_FK",
			onDelete : "CASCADE"
		});
	};
	return Video;

};