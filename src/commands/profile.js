const { getPlayerByName } = require("../services/");
const { playerByName } = require("../libs/embed");
const { playerEmbed } = require("../libs/embed");
const showStats = require("../libs/showStats");

module.exports = {
	name: "profile",
	alias: ["stats"],

	run: async (client, message, args) => {
		try {
			let player = args[0];
			const id = args[1];
			let server = args[2];
			let indexLeague = 2;

			const regEx = /^\w+#\d+$/i;

			if (id !== /\d/gi && !server && !regEx.test(player)) {
				if (id === "america") {
					indexLeague = 1;
					let stats = await getPlayerByName(player, 10);
					return await playerByName(player, stats, message, indexLeague);
				} else {
					let stats = await getPlayerByName(player, 20);
					return await playerByName(player, stats, message, indexLeague);
				}
			}

			if (id === "america") {
				player = player.replace(/#/gi, "%23");
				server = "america";
				indexLeague = 1;
			} else if (!id || id === "europe") {
				player = player.replace(/#/gi, "%23");
				server = "europe";
				indexLeague = 2;
			}


			if (server === "america") {
				let objectPlayer = await showStats(player, 10, message);
				await playerEmbed(objectPlayer.player, objectPlayer.stats, message, indexLeague);
			} else {
				let objectPlayer = await showStats(player, 20, message);
				await playerEmbed(objectPlayer.player, objectPlayer.stats, message, indexLeague);
			}
		} catch (err) {
			console.log(err);
		}
	}
};
