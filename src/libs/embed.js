const Discord = require("discord.js");
const { getLeagues } = require("../services/");

const emojiUnd = "<:undead:762111221477670942>";
const emojiOrc = "<:Orc:762111149516783637>";
const emojiNe = "<:NE:762111289363005450>";
const emojiHum = "<:Hum:762111044038033408>";
const emojiRdm = "<:Rdm:762136144137158656>";
const emojiGrandMaster = "<:GM:762322281371664385>";
const emojiMaster = "<:master:762322420253065216>";
const emojiDiamond = "<:Diamond:762323081041149982>";
const emojiPlatinum = "<:platinum:762322351161212969>";
const emojiGold = "<:gold:762322312321826848>";
const emojiSilver = "<:silver:762322243434053653>";
const emojiBronze = "<:Bronze:762322183589855295>";

const playerEmbed = async (name, stats, message, indexLeague) => {
	try {
		let embed = new Discord.MessageEmbed();
		let avatar;
		let race;
		let leagueName;
		let iconRace;
		const leagues = await getLeagues();

		for (let i = 0; i < leagues[indexLeague].leagues.length; i++) {
			if (
				stats[0].league ===
				leagues[indexLeague].leagues[i].id
			) {
				leagueName =
					leagues[indexLeague].leagues[i].name;
			}
		}

		if (leagueName === "Grand Master") {
			leagueName = emojiGrandMaster;
		} else if (leagueName === "Master") {
			leagueName = emojiMaster;
		} else if (leagueName === "Diamond") {
			leagueName = emojiDiamond;
		} else if (leagueName === "Platinum") {
			leagueName = emojiPlatinum;
		} else if (leagueName === "Gold") {
			leagueName = emojiGold;
		} else if (leagueName === "Silver") {
			leagueName = emojiSilver;
		} else if (leagueName === "Bronze") {
			leagueName = emojiBronze;
		}

		embed.addField("Rank", stats[0].rankNumber, true);
		embed.addField("Mode", "1v1", true);
		embed.addField("League", leagueName, true);

		if (stats[0].race === 1) {
			iconRace = emojiHum;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/HUMAN_10.jpg";
		} else if (stats[0].race === 2) {
			iconRace = emojiOrc;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/ORC_8.jpg";
		} else if (stats[0].race === 4) {
			iconRace = emojiNe;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/NIGHT_ELF_10.jpg";
		} else if (stats[0].race === 8) {
			iconRace = emojiUnd;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/UNDEAD_9.jpg";
		} else if (stats[0].race === 0) {
			iconRace = emojiRdm;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/RANDOM_9.jpg";
		}

		if (stats[0].race === 1) {
			race = "Human";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 2) {
			race = "Orc";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 4) {
			race = "Night";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 8) {
			race = "Undead";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 0) {
			race = "Random";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[i].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		}

		embed.setColor("#0099ff")
			.setTitle(stats[0].player.name + " " + iconRace)
			.setThumbnail(avatar);

		return message.channel.send(embed);
	} catch (error) {
		console.log(error);
		return message.channel.send("Wrong name or id");
	}
};

const playerByName = async (name, stats, message, indexLeague) => {
	try {
		let embed = new Discord.MessageEmbed();
		let avatar;
		let race;
		let leagueName;
		let iconRace;

		const leagues = await getLeagues();

		for (let i = 0; i < leagues[indexLeague].leagues.length; i++) {
			if (
				stats[0].league ===
				leagues[indexLeague].leagues[i].id
			) {
				leagueName =
					leagues[indexLeague].leagues[i].name;
			}
		}

		if (leagueName === "Grand Master") {
			leagueName = emojiGrandMaster;
		} else if (leagueName === "Master") {
			leagueName = emojiMaster;
		} else if (leagueName === "Diamond") {
			leagueName = emojiDiamond;
		} else if (leagueName === "Platinum") {
			leagueName = emojiPlatinum;
		} else if (leagueName === "Gold") {
			leagueName = emojiGold;
		} else if (leagueName === "Silver") {
			leagueName = emojiSilver;
		} else if (leagueName === "Bronze") {
			leagueName = emojiBronze;
		}

		if (stats[0].player.race === 1) {
			iconRace = emojiHum;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/HUMAN_10.jpg";
		} else if (stats[0].player.race === 2) {
			iconRace = emojiOrc;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/ORC_8.jpg";
		} else if (stats[0].player.race === 4) {
			iconRace = emojiNe;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/NIGHT_ELF_10.jpg";
		} else if (stats[0].player.race === 8) {
			iconRace = emojiUnd;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/UNDEAD_9.jpg";
		} else if (stats[0].player.race === 0) {
			iconRace = emojiRdm;
			avatar =
				"https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/RANDOM_9.jpg";
		}

		embed.addField("Rank", stats[0].rankNumber, true);
		embed.addField("Mode", "1v1", true);
		embed.addField("League", leagueName, true);

		if (stats[0].player.race === 1) {
			race = "Human";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 2) {
			race = "Orc";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 4) {
			race = "Night";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 8) {
			race = "Undead";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		} else if (stats[0].race === 0) {
			race = "Random";
			embed.addFields(
				{
					name: race,
					value:
						stats[0].player.wins +
						" - " +
						stats[0].player.losses +
						"  (" +
						Math.round(
							stats[0].player
								.winrate * 100
						) +
						"%)",
					inline: true
				},
				{
					name: "Mmr",
					value: stats[0].player.mmr,
					inline: true
				},
				{
					name: "RP",
					value: stats[0].rankingPoints,
					inline: true
				}
			);
		}

		embed.setColor("#0099ff")
			.setTitle(stats[0].player.name + " " + iconRace)
			.setThumbnail(avatar);

		return message.channel.send(embed);
	} catch (error) {
		console.log(error);
		return message.channel.send("Wrong name or id");
	}
};

const matchEmbed = (player, message) => {
	let embed = new Discord.MessageEmbed();

	embed.setColor("#0099ff")
		.setTitle("Game")
		.setThumbnail(
			"https://www.w3champions.com/img/grandmaster.9613f56f.png"
		)
		.addFields(
			{
				name: "Match",
				value:
					player.teams[0].players[0].battleTag +
					"  VS  " +
					player.teams[1].players[0].battleTag
			},
			{ name: "Map", value: player.map }
		);
	message.channel.send(embed);
};

const rankingEmbed = (ranking, message, img) => {
	let embed = new Discord.MessageEmbed();
	let embed2 = new Discord.MessageEmbed();
	let embed3 = new Discord.MessageEmbed();
	let embed4 = new Discord.MessageEmbed();

	embed.setColor("#0099ff").setTitle("RANKING").setThumbnail(img);

	ranking.map((player, i) => {
		if (i < 25) {
			embed.addFields({
				name: player.player1Id,
				value: "Rank: " + player.rankNumber,
				inline: true
			});
		} else {
			if (i < 50) {
				embed2.addFields({
					name: player.player1Id,
					value: "Rank: " + player.rankNumber,
					inline: true
				});
			} else {
				if (i < 75) {
					embed3.addFields({
						name: player.player1Id,
						value:
							"Rank: " +
							player.rankNumber,
						inline: true
					});
				} else {
					if (i < 100) {
						embed4.addFields({
							name: player.player1Id,
							value:
								"Rank: " +
								player.rankNumber,
							inline: true
						});
					}
				}
			}
		}
	});

	if (embed.fields.length !== 0) {
		message.channel.send(embed);
	}
	if (embed2.fields.length !== 0) {
		embed2.setColor("#0099ff");
		message.channel.send(embed2);
	}
	if (embed3.fields.length !== 0) {
		embed3.setColor("#0099ff");
		message.channel.send(embed3);
	}
	if (embed4.fields.length !== 0) {
		embed4.setColor("#0099ff");
		message.channel.send(embed4);
	}
};

const matchesEmbed = (matchesList, message) => {
	let embed = new Discord.MessageEmbed()
		.setColor("#0099ff")
		.setTitle("MATCHES")
		.setThumbnail(
			"https://www.w3champions.com/img/grandmaster.9613f56f.png"
		);

	for (let i = 0; i < matchesList.matches.length; i++) {
		embed.addFields({
			name: "Match",
			value:
				matchesList.matches[i].teams[0].players[0]
					.battleTag +
				" VS " +
				matchesList.matches[i].teams[1].players[0]
					.battleTag
		});
	}
	message.channel.send(embed);
};

const helpEmbed = (message) => {
	let embed = new Discord.MessageEmbed();
	embed.setColor("#0099ff").setTitle("Commands").addFields(
		{
			name: "!profile name battleTag",
			value: "Example: !profile Grubby"
		},
		{
			name: "!vs name battleTag",
			value: "Example: !vs Grubby 1278"
		},
		{
			name: "!Ranking league server",
			value: "Example: !Ranking Grand Master Europe"
		},
		{
			name: "!Matches server",
			value: "Example: !Matches Europe"
		}
	);
	message.channel.send(embed);
};

module.exports = {
	playerEmbed,
	rankingEmbed,
	matchesEmbed,
	helpEmbed,
	matchEmbed,
	playerByName
};
