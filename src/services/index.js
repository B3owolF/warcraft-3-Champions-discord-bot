const fetch = require("node-fetch");

const getDataRankings = async (seccion, server) => {
	const response = await fetch(
		`https://statistic-service.w3champions.com/api/ladder/${seccion}?gateWay=${server}&gameMode=1&season=${process.env.SEASON}`
	);
	return response.json();
};

const getMatches = async (server) => {
	const response = await fetch(
		`https://statistic-service.w3champions.com/api/matches/ongoing?offset=0&gateway=${server}&pageSize=50&gameMode=1`
	);
	return response.json();
};

const getMatch = async (player) => {
	const response = await fetch(
		`https://statistic-service.w3champions.com/api/matches/ongoing/${player}`
	);
	return response.json();
};

const getStats = async (player, server) => {
	const response = await fetch(
		`https://statistic-service.w3champions.com/api/players/${player}/game-mode-stats?gateWay=${server}&season=${process.env.SEASON}`
	);

	const data = await response.json();
	return data;
};

const getPlayerByName = async (player, server) => {
	let response = await fetch(
		`https://statistic-service.w3champions.com/api/ladder/search?gateWay=${server}&searchFor=${player}&season=${process.env.SEASON}`
	);
	let data = await response.json();

	let playerObject = undefined;
	let playersRp = [];
	let players = [];
	let rp;
	player = player.toLowerCase().replace(/%23/gi, "#");

	for(let i = 0; i < data.length; i++){
		if(player == data[i].player.playerIds[0].name.toLowerCase() || player == data[i].player.playerIds[0].battleTag.toLowerCase()){
			playerObject = data[i]
			break;
		}
	}

	for(let i = 0; i < data.length; i++){
		if(player == data[i].player.playerIds[0].name.toLowerCase() || player == data[i].player.playerIds[0].battleTag.toLowerCase()){
			players.push(data[i]);
		}
	}

	if(players.length > 1){
		for(let i = 0; i < data.length; i++){
			playersRp.push(data[i].rankingPoints);
		}
		rp = Math.max(...playersRp);
		for(let i = 0; i < data.length; i++){
			if(player == data[i].player.playerIds[0].name.toLowerCase() || player == data[i].player.playerIds[0].battleTag.toLowerCase()){
				if(data[i].rankingPoints === rp){
					playerObject = data[i]
					break;
				}
			}
		}
	}


	if(playerObject === undefined){
		return data[0];
	}
	return playerObject;
};

const getLeagues = async () => {
	const response = await fetch(
		`https://statistic-service.w3champions.com/api/ladder/league-constellation?season=${process.env.SEASON}`
	);
	return response.json();
};

module.exports = {
	getDataRankings,
	getMatches,
	getMatch,
	getStats,
	getLeagues,
	getPlayerByName
};
