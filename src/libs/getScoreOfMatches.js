const getScoreOfMatches = (matches, namePlayerOne, namePlayerTwo) => {
	let racePlayerOne = 0;
	let racePlayerTwo = 0;
	let scorePlayerOne = 0;
	let scorePlayerTwo = 0;
	let j = 0;
	let i = 1;			

	matches.map(match => {
		if (
			match.teams[j].players[0].name.toLowerCase() === namePlayerOne ||
			match.teams[i].players[0].name.toLowerCase() === namePlayerTwo ||
			match.teams[j].players[0].name.toLowerCase() === namePlayerTwo ||
			match.teams[i].players[0].name.toLowerCase() === namePlayerTwo
		) {
			if (
				(match.teams[j].won && match.teams[j].players[0].name.toLowerCase() === namePlayerOne) ||
				(match.teams[i].won && match.teams[i].players[0].name.toLowerCase() === namePlayerOne)
			) {
				scorePlayerOne++;
			} else if (
				(match.teams[i].won && match.teams[i].players[0].name.toLowerCase() === namePlayerTwo) ||
				(match.teams[j].won && match.teams[j].players[0].name.toLowerCase() === namePlayerTwo)
			) {
				scorePlayerTwo++;
			}
		}
	});
	if (matches[0].teams[j].players[0].name.toLowerCase() === namePlayerOne) {
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
	return { scorePlayerOne, racePlayerOne, namePlayerOne, scorePlayerTwo, racePlayerTwo, namePlayerTwo };
};

module.exports = getScoreOfMatches;
