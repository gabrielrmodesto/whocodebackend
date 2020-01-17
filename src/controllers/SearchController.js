const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringsAsArray');

module.exports = {
	async index(request, response){
		const { latitude, longitude, techs } = request.query;

		const techsArray = parseStringAsArray(techs);
		
	}
}