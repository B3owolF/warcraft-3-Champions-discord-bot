const { helpEmbed } = require("../libs/embed");

module.exports = {
	name: "help",
	alias: [],
	run: (client, message, args) => {
		return helpEmbed(message);
	}
};
