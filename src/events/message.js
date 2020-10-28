const { prefix } = require("../config.json");
const showStats = require("../libs/showStats");
const showOponent = require("../libs/showOponent");
const ranking = require("../libs/Ranking");
const matches = require("../libs/matches");
const league = require("../leagues");
const { getLeagues, getPlayerByName } = require("../services");
const { playerEmbed, playerByName } = require("../libs/embed");

const { helpEmbed } = require("../libs/embed");

let channels = [
	"414331594485268490",
	"761737482722869301",
	"713424069277778042",
	"761821925366169620",
	"578877620037484549",
	"762353907832979477",
	"762402365160161300"
];

const channelAllowed = (message) => {
	for (let i = 0; i < channels.length; i++) {
		if (message.channel.id === channels[i]) {
			return true;
		}
	}
	return false;
};

const deleteChannel = (channel) => {
	for (let i = 0; i < channels.length; i++) {
		if (channel === channels[i]) {
			channels.splice(i, 1);
		}
	}
};

const eventsMessage = (client) => {
	client.on("message", (message) => {
		if (
			message.content.startsWith(prefix + "channel ") &&
			message.member.roles.cache.find(
				(r) => r.name === "admin"
			)
		) {
			let channel = message.content.split(" ")[1];
			channels.push(channel);
			message.channel.send("add successfully");
		}
	});

	client.on("message", (message) => {
		if (
			message.content.startsWith(prefix + "delete ") &&
			message.member.roles.cache.find(
				(r) => r.name === "admin"
			)
		) {
			let channel = message.content.split(" ")[1];
			deleteChannel(channel);
			message.channel.send("deleted successfully");
		}
	});

	client.on("message", async (message) => {
		if (
			(message.content.startsWith(prefix + "profile ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "Profile ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "PROFILE ") &&
				channelAllowed(message))
		) {
			try {
				let player = message.content
					.split(" ")[1]
					.toLowerCase();
				const id = message.content.split(" ")[2];
				let server = message.content.split(" ")[3];
				let indexLeague = 0;

				const regEx = /^\w+#\d+$/i;

				if (
					id !== /\d/gi &&
					!server &&
					!regEx.test(player)
				) {
					if (id === "america") {
						indexLeague = 1;
						let stats = await getPlayerByName(
							player,
							10
						);
						return playerByName(
							player,
							stats,
							message,
							indexLeague
						);
					} else {
						let stats = await getPlayerByName(
							player,
							20
						);
						return playerByName(
							player,
							stats,
							message,
							indexLeague
						);
					}
				}

				if (id === "america") {
					player = player.replace(/#/gi, "%23");
					server = "america";
					indexLeague = 1;
				} else if (!id || id === "europe") {
					player = player.replace(/#/gi, "%23");
					server = "europe";
					indexLeague = 0;
				}

				player = player.replace(/\b\w/g, (l) =>
					l.toUpperCase()
				);

				if (server === "america") {
					let objectPlayer = await showStats(
						player,
						10,
						message
					);
					playerEmbed(
						objectPlayer.player,
						objectPlayer.stats,
						message,
						indexLeague
					);
				} else {
					let objectPlayer = await showStats(
						player,
						20,
						message
					);
					playerEmbed(
						objectPlayer.player,
						objectPlayer.stats,
						message,
						indexLeague
					);
				}
			} catch (err) {
				console.log(err);
			}
		}
	});

	client.on("message", (message) => {
		if (
			(message.content.startsWith(prefix + "vs ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "Vs ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "VS ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "vS ") &&
				channelAllowed(message))
		) {
			let player = message.content.split(" ")[1];
			const id = message.content.split(" ")[2];

			if (!id) {
				player = player.replace(/#/gi, "%23");
			} else {
				player = player + "%23" + id;
			}
			player = player.replace(/\b\w/g, (l) =>
				l.toUpperCase()
			);

			if (player) {
				return showOponent(player, message);
			}
			message.channel.send("Wrong name or id");
		}
	});

	client.on("message", async (message) => {
		if (
			(message.content.startsWith(prefix + "Ranking ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "ranking ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "RANKING ") &&
				channelAllowed(message))
		) {
			let section =
				message.content.split(" ")[1] +
				" " +
				message.content.split(" ")[2];
			let server = message.content.split(" ")[3];

			let img;
			let indexLeague = 1;

			const leagues = await getLeagues();

			const grandMaster =
				"https://www.w3champions.com/img/grandmaster.9613f56f.png";
			const master =
				"https://www.w3champions.com/img/master.4ddcd330.png";
			const diamond =
				"https://www.w3champions.com/img/diamond.86df1d96.png";
			const platinum =
				"https://www.w3champions.com/img/platinum.24bc49fa.png";
			const gold =
				"https://www.w3champions.com/img/gold.fe8039cf.png";
			const silver =
				"https://www.w3champions.com/img/silver.0c6ea3fc.png";
			const bronze =
				"https://www.w3champions.com/img/bronze.ce21aafe.png";

			section = section.toLowerCase();

			let firstWord = message.content
				.split(" ")[1]
				.toLowerCase();

			server = server.toLowerCase();

			if (firstWord === "grand") {
				img = grandMaster;
				section = section + " " + 0;
			}

			if (firstWord === "master") {
				img = master;
				section = section.replace(/1/gi, 0);
			}

			if (firstWord === "diamond") {
				img = diamond;
			}

			if (firstWord === "platinum") {
				img = platinum;
			}

			if (firstWord === "gold") {
				img = gold;
			}

			if (firstWord === "silver") {
				img = silver;
			}

			if (firstWord === "bronze") {
				img = bronze;
			}

			if (server === "america") {
				for (
					let i = 0;
					i < leagues[1].leagues.length;
					i++
				) {
					if (
						section ===
						leagues[1].leagues[
							i
						].name.toLowerCase() +
							" " +
							leagues[1].leagues[i]
								.division
					) {
						indexLeague =
							leagues[1].leagues[i]
								.id;
					}
				}
				return ranking(message, indexLeague, 10, img);
			}

			if (server === "europe") {
				for (
					let i = 0;
					i < leagues[2].leagues.length;
					i++
				) {
					if (
						section ===
						leagues[2].leagues[
							i
						].name.toLowerCase() +
							" " +
							leagues[2].leagues[i]
								.division
					) {
						indexLeague =
							leagues[2].leagues[i]
								.id;
					}
				}
				return ranking(message, indexLeague, 20, img);
			}
			message.channel.send("Error");
		}
	});

	client.on("message", (message) => {
		if (
			(message.content.startsWith(prefix + "Matches ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "matches ") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "MATCHES ") &&
				channelAllowed(message))
		) {
			const server = message.content
				.split(" ")[1]
				.toLowerCase();
			if (server.toLowerCase() === "america") {
				return matches(10, message);
			}
			if (server.toLowerCase() === "europe") {
				return matches(20, message);
			}
			message.channel.send("Error");
		}
	});

	client.on("message", (message) => {
		if (
			(message.content.startsWith(prefix + "help") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "HELP") &&
				channelAllowed(message)) ||
			(message.content.startsWith(prefix + "Help") &&
				channelAllowed(message))
		) {
			helpEmbed(message);
		}
	});
};

module.exports = eventsMessage;
