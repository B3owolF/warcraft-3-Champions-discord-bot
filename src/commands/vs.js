const showOponent = require("../libs/showOponent");

module.exports = {
	name: "vs",
	alias: [],
	run: (client, message, args) => {
		try {
			let player = args[0];
			let id = args[1];
			if (!id) {
				player = player.replace(/#/gi, "%23");
			} else {
				player = player + "%23" + id;
			}

			if (player) {
				return showOponent(player, message);
			}
			return message.channel.send("Wrong name or id");
		} catch (err) {
			console.log(err);
		}
	}
};
