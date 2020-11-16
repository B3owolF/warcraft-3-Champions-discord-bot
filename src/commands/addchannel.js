const channels = require("../channels");

module.exports = {
	name: "channel",
	alias: ["add"],
	run: (client, message, args) => {
		if (!message.member.roles.cache.find(roles => roles.name === "admin")) return;
		let channel = args[0];
		channels.push(channel);
		message.channel.send("add successfully");
	}
};
