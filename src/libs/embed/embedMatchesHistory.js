const { MessageEmbed } = require("discord.js");

const embedMatchesHistory = (matches, name) => {
	const embed = new MessageEmbed();
	embed.setTitle(name).setColor("#0099ff");

	for (let index = 0; index < matches.matches.length; index++) {
		embed.addField(
			`Game ${index}`,
			`id: ${matches.matches[index].id}\n ${matches.matches[index].teams[0].players[0].name} vs ${matches.matches[index].teams[1].players[0].name}`,
						true
		);
	}
	return embed;
};

module.exports = embedMatchesHistory;
