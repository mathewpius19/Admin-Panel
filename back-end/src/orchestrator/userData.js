import { Sequelize, database, models } from "../sequelize.js";


export function loadUserProperties(authenticatedUser) {
	return database().transaction(async function() {
		try {
			// Load client for authenticated user
			const client = await models().client.findAll();
            const response = { status: 200, message: t("label.success", { lng: browserLng }), user: userProperties };

			// Return the response object
			return response;
		} catch (error) {
			throw error;
		}
	});
}