const channels = require("../channels");

const deleteChannel = channel => {
	for (let i = 0; i < channels.length; i++) {
		if (channel === channels[i]) {
			channels.splice(i, 1);
		}
	}
};

module.exports = {
	name: "delete",
	alias: [],
	run: (client, message, args) => {
		if (!message.member.roles.cache.find(roles => roles.name === "admin")) return;

		let channel = args[0];
		deleteChannel(channel);
		message.channel.send("deleted successfully");
	}
};
