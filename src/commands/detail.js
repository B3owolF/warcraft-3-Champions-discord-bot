const getMatch = require("../services/getMatch");
const canvasMatch = require("../libs/canvas/canvasMatch");

module.exports = {
	name: "detail",
	alias: ["d"],
	run: async (client, message, args) => {
		try {
			const id = args[0];
			const matchFound = await getMatch(id);
			const image = canvasMatch(matchFound);
			message.channel.send(image);
		} catch (err) {
			console.log(err);
		}
	}
};
