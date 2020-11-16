const fetch = require("node-fetch");

const getStatsByMode = async (player, server) => {
	try {
		const response = await fetch(
			`https://statistic-service.w3champions.com/api/players/${player}/game-mode-stats?gateWay=${server}&season=${process.env.SEASON}`
		);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
};

module.exports = getStatsByMode;
