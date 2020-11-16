const { MessageEmbed } = require("discord.js");

const embedGamesIds = gamesIds => {
	const embed = new MessageEmbed();
	embed.setTitle("Games")
		.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRseO8kuzD9943O0Z0XkJISBkCfJkMjRE-zwg&usqp=CAU")
		.setColor("#0099ff");

	for (index in gamesIds) {
		let number = parseInt(index) + 1;
		embed.addField(`Game ${number}`, `${gamesIds[index]}`, true);
	}
	return embed;
};

module.exports = embedGamesIds;
