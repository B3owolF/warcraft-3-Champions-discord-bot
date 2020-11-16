const { MessageEmbed } = require("discord.js");

const emojiUnd = "<:Undead:771391362595160084>";   
const emojiOrc = "<:ORC:771391078833061948>";
const emojiNe = "<:NE:771390761052012645>";
const emojiHum = "<:Hum:771391612663496725>";  
const emojiRdm = "<:RDM:771392710522437653>";


const objectEmojis = {
				race1: emojiHum,
				race4: emojiNe,
				race8: emojiUnd,
				race0: emojiRdm,
				race2: emojiOrc
}

const embedStatsByRace = (statsByRace, name) => {
	const embed = new MessageEmbed();

	embed.setTitle(name)
		.setColor("#0099ff")
		.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRseO8kuzD9943O0Z0XkJISBkCfJkMjRE-zwg&usqp=CAU");

	for (index in statsByRace) {
		embed.addFields(
			{
				name: "Race",
				value: objectEmojis["race" + statsByRace[index].race],
				inline: true
			},
			{
				name: "Winrate",
				value: `( ${statsByRace[index].wins} - ${statsByRace[index].losses} ) ( ${Math.round(
					statsByRace[index].winrate * 100
				)}% )`,
				inline: true
			},
			{
				name: "Games",
				value: statsByRace[index].games,
				inline: true
			}
		);
	}
	return embed;
};

module.exports = embedStatsByRace;
