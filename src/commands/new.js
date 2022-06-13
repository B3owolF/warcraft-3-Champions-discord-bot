const { getPlayerByName } = require("../services/");
const { playerByName } = require("../libs/embed");
const { playerEmbed } = require("../libs/embed");
const showStats = require("../libs/showStats");
const canvasProfile = require("../libs/canvas/canvasProfile");

module.exports = {
	name: "new",
	alias: ["new"],

	run: async (client, message, args) => {
		try {
			let player = args[0];
			let server = args[1];
			let indexLeague = 2;

			const regEx = /^\w+#\d+$/i;

			if (!server && !regEx.test(player)) {
				if (server === "america") {
					indexLeague = 1;
					let stats = await getPlayerByName(player, 10);
					return await playerByName(player, stats, message, indexLeague);
				} else {
          console.log(player);
					let stats = await getPlayerByName(player, 20);
					const image = await canvasProfile(stats);
          return message.channel.send(image);
				}
			}

			if (server === "america") {
				player = player.replace(/#/gi, "%23");
				server = "america";
				indexLeague = 1;
			} else {
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
