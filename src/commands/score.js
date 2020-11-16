const { getPlayerByName, getScore } = require("../services/index");
const getScoreOfMatches = require("../libs/getScoreOfMatches");
const canvasScore = require("../libs/canvas/canvasScore");
const getBattleTag = require("../libs/getbattletag");
const embedGamesIds = require("../libs/embed/embedGamesIds");

const getScoreAmericaAndEurope = async (message, playerOne, playerTwo, server) => {
	playerOne = await getBattleTag(playerOne, server);
	playerTwo = await getBattleTag(playerTwo, server);

	const matches = await getScore(playerOne, playerTwo, server);

	if (matches.matches.length === 0) return message.channel.send("no statistics found");

	playerOne = playerOne.replace(/%23/gi, "#");
	playerTwo = playerTwo.replace(/%23/gi, "#");
	const score = getScoreOfMatches(matches.matches, playerOne, playerTwo);
	const image = await canvasScore(score);
	const embed = embedGamesIds(score.gamesIds);
	message.channel.send(image);
  message.channel.send(embed);
};

module.exports = {
	name: "score",
	alias: [],
	run: async (client, message, args) => {
		try {
			if (args[0] === args[2]) {
				return message.channel.send("do not write the same name");
			}

			if (args[3] === "america") {
				return getScoreAmericaAndEurope(message, args[0], args[2], 10);
			}
			return getScoreAmericaAndEurope(message, args[0], args[2], 20);
		} catch (err) {
			return message.channel.send("no statistics found");
		}
	}
};
