const getStatsByMode = require("../services/getstatsbymode");
const getBattleTag = require("../libs/getbattletag");
const embedStatsByMode = require("../libs/embed/embedStatsByMode");

module.exports = {
	name: "statsbymode",
	alias: ["statsbm", "statsm", "sbm"],
	run: async (client, message, args) => {
		try {
			let player = args[0];
			const server = args[1];

			if (!server || server === "europe") {
				player = await getBattleTag(player, 20);
				let statsByModeFound = await getStatsByMode(player, 20);
				if (statsByModeFound.length === 0) {
					statsByModeFound = await getStatsByMode(player, 10);
				}
        if(statsByModeFound.length === 0){
          return message.channel.send("in this season you don't have games")
        }
				const embed = embedStatsByMode(statsByModeFound);
				return message.channel.send(embed);
			}
			player = await getBattleTag(player, 10);
			const statsByModeFound = await getStatsByMode(player, 10);
			if (statsByModeFound.length === 0) return message.channel.send("no stats by mode found");
			const embed = embedStatsByMode(statsByModeFound);
			return message.channel.send(embed);
		} catch (err) {
			console.log(err);
		}
	}
};
