const { MessageEmbed } = require("discord.js");

const emojiGrandMaster = "<:GM:762322281371664385>";
const emojiMaster = "<:master:762322420253065216>";
const emojiDiamond = "<:Diamond:762323081041149982>";
const emojiPlatinum = "<:platinum:762322351161212969>";
const emojiGold = "<:gold:762322312321826848>";
const emojiSilver = "<:silver:762322243434053653>";
const emojiBronze = "<:Bronze:762322183589855295>";

const embedStatsByModeObject = {
	league0: emojiGrandMaster,
	league1: emojiMaster,
	league2: emojiDiamond,
	league3: emojiPlatinum,
	league4: emojiGold,
	league5: emojiSilver,
	league6: emojiBronze,
	mode1: "1v1",
	mode2: "2v2",
	mode4: "4v4",
	mode5: "FFA",
	mode6: "2v2 AT",
	race2: "https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/ORC_8.jpg",
	race8: "https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/UNDEAD_9.jpg",
	race1: "https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/HUMAN_10.jpg",
	race4: "https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/NIGHT_ELF_10.jpg",
	race5: "https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/RANDOM_9.jpg"
};

const embedStatsByMode = statsByMode => {
	const embed = new MessageEmbed();

	embed.setTitle(statsByMode[0].playerIds[0].name)
		.setColor("#0099ff")
		.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRseO8kuzD9943O0Z0XkJISBkCfJkMjRE-zwg&usqp=CAU");

	for (index in statsByMode) {
		embed.addFields(
			{
				name: "Mode",
				value: embedStatsByModeObject["mode" + statsByMode[index].gameMode]
			},
			{
				name: "League",
				value: embedStatsByModeObject["league" + statsByMode[index].leagueId],
				inline: true
			},
			{
				name: "Stats",
				value: `${statsByMode[index].wins} - ${statsByMode[index].losses} ( ${Math.round(
					statsByMode[index].winrate * 100
				)}% )`,
				inline: true
			},
			{
				name: "RP",
				value: statsByMode[index].rankingPoints,
				inline: true
			},
			{
				name: "Mmr",
				value: statsByMode[index].mmr,
				inline: true
			}
		);
	}
	return embed;
};

module.exports = embedStatsByMode;
