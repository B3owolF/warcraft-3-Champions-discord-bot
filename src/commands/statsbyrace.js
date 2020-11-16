const getBattleTag = require("../libs/getbattletag");
const getStatsByRace = require("../services/getstatsbyrace");
const embedStatsByRace = require("../libs/embed/embedStatsByRace");

module.exports = {
	name: "statsbyrace",
	alias: ["sbr", "statsbr", "sbyrace"],
	run: async (client, message, args) => {
		try {
			let player = args[0];
			let server = args[1];

			if (!server || server === "europe") {
				player = await getBattleTag(player, 20);
				let statsFound = await getStatsByRace(player, 20);
				if (statsFound.length === 0) {
					statsFound = await getStatsByRace(player, 10);
				}
				const name = player.replace(/%23/gi, "#"); 
				const embed = embedStatsByRace(statsFound, name);
				return message.channel.send(embed);
			}

			player = await getBattleTag(player, 10);
			const statsFound = await getStatsByRace(player, 10);
      const name = player.replace(/%23/gi, "#");
			const embed = embedStatsByRace(statsFound, name);
			return message.channel.send(embed);
		} catch (err) {
			console.log(err);
		}
	}
};
