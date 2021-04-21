import Sequelize from "sequelize";
import fs from "fs";
import path from "path";
// import config from "../../config";

let connection = null;
let sqModels = {};

import config from "dotenv";


const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const schema = process.env.DB_SCHEMA;
const min = 0;
const max = 10;
const acquire = 30000;
const idle = 10000;

export function connect(done) {
	// Connect to database through Sequelize
	connection = new Sequelize(schema,username,password, {
		host: host,
		dialect: "mysql",
		pool: {
			max: max,
			min: min,
			acquire: acquire,
			idle: idle
		},
		logging: false
	});

	// Import models to sequelize from the models directory
	fs.readdirSync(path.join(__dirname, "../models")).forEach(function(file) {
		if (file.toLowerCase().indexOf(".js")) {
			var model = connection.import(path.join(__dirname, "../models", file));
			sqModels[model.name] = model;
		}
	});

	// Store models in object for retrieval
	Object.keys(sqModels).forEach(modelName => {
		if (sqModels[modelName].associate) {
			sqModels[modelName].associate(sqModels);
		}
	});

	// Notify once complete
	done();
}

export { Sequelize };

export function database() {
	return connection;
}

export function models() {
	return sqModels;
}
