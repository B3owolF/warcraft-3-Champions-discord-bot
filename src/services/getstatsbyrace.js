const fetch = require("node-fetch");

const getStatsByRace = async (player, server) => {
	try {
		const response = await fetch(
			`https://statistic-service.w3champions.com/api/players/${player}/race-stats?gateWay=${server}&season=${process.env.SEASON}`
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

module.exports = getStatsByRace;
