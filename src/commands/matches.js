const matches = require("../libs/matches");

module.exports = {
	name: "matches",
	alias: [],
	run: (client, message, args) => {
		try {
			const server = args[0];
			if (server.toLowerCase() === "america") {
				return matches(10, message);
			}
			if (server.toLowerCase() === "europe") {
				return matches(20, message);
			}
			message.channel.send("Error");
		} catch (err) {
			console.log(err);
		}
	}
};
