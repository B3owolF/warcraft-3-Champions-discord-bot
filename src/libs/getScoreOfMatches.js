const getScoreOfMatches = (matches, namePlayerOne, namePlayerTwo) => {
	let racePlayerOne = 0;
	let racePlayerTwo = 0;
	let scorePlayerOne = 0;
	let scorePlayerTwo = 0;
	let j = 0;
	let i = 1;
	let gamesIds = [];

	matches.map(match => {
		gamesIds.push(match.id);
		if (
			(match.teams[j].won && match.teams[j].players[0].battleTag === namePlayerOne) ||
			(match.teams[i].won && match.teams[i].players[0].battleTag === namePlayerOne)
		) {
			scorePlayerOne++;
		} else {
			scorePlayerTwo++;
		}
	});
	if (matches[0].teams[j].players[0].battleTag === namePlayerOne) {
		racePlayerOne = matches[0].teams[j].players[0].race;
		racePlayerTwo = matches[0].teams[i].players[0].race;
		namePlayerOne = matches[0].teams[j].players[0].name;
		namePlayerTwo = matches[0].teams[i].players[0].name;
	} else {
		racePlayerOne = matches[0].teams[i].players[0].race;
		racePlayerTwo = matches[0].teams[j].players[0].race;
		namePlayerOne = matches[0].teams[i].players[0].name;
		namePlayerTwo = matches[0].teams[j].players[0].name;
	}
	return { scorePlayerOne, racePlayerOne, namePlayerOne, scorePlayerTwo, racePlayerTwo, namePlayerTwo, gamesIds };
};

module.exports = getScoreOfMatches;
