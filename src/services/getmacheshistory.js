const fetch = require("node-fetch");

const countMatches = {
	undefined: 25,
	0: 25,
	1: 50,
	2: 75,
	3: 100,
	4: 125,
	5: 150,
	6: 175,
	7: 225,
	8: 250,
	9: 275,
	10: 300,
	11: 325,
	12: 350
};

const numberMatch = {
	undefined: 0,
	0: 0,
	1: 25,
	2: 50,
	3: 75,
	4: 100,
	5: 125,
	6: 150,
	7: 175,
	8: 200,
	9: 225,
	10: 250,
	11: 275,
	12: 300,
	13: 325
};

const getMatchesHistory = async (player, server, count) => {
	const response = await fetch(
		`https://statistic-service.w3champions.com/api/matches/search?playerId=${player}&gateway=${server}&offset=${numberMatch[count]}&pageSize=${countMatches[count]}&gameMode=1&season=${process.env.SEASON}`
	);
	const data = await response.json();
	return data;
};

module.exports = getMatchesHistory;
