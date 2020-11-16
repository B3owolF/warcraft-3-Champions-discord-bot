const getMatchesHistory = require("../services/getmacheshistory");
const getbattletag = require("../libs/getbattletag");
const embedMatchesHistory = require("../libs/embed/embedMatchesHistory");

module.exports = {
	name: "matchhistory",
	alias: ["mh", "mhistory", "history"],
	run: async (client, message, args) => {
		let player = args[0];
		let server = args[1];
		let countMatches = args[2];

		if (!server || server === "europe") {
			player = await getbattletag(player, 20);
			let matchesFound = await getMatchesHistory(player, 20, countMatches);

			if (matchesFound.length === 0) {
				player = await getbattletag(player, 10);
				matchesFound = await getMatchesHistory(player, 10, countMatches);
			}

			player = player.replace(/%23/gi, "#");
			const embed = embedMatchesHistory(matchesFound, player);
			return message.channel.send(embed);
		}
		player = await getbattletag(player, 10);
		const matchesFound = await getMatchesHistory(player, 10, countMatches);
		player = player.replace(/%23/gi, "#");
		const embed = embedMatchesHistory(matchesFound, player);
		return message.channel.send(embed);
	}
};
