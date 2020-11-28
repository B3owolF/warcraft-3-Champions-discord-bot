const { config } = require("dotenv");

config();

const { Client, Collection } = require("discord.js");
const eventsMessage = require("./events/message");
const getWinrates = require("./services/getStatsOfPatchMapsAndRace");
const fs = require("fs");
const path = require("path");

const client = new Client();

client.commands = new Collection();

let files = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (let file of files) {
	let command = require("./commands/" + file);
	client.commands.set(command.name, command);
}

client.on("ready", async () => {
	client.user.setActivity("!help");
	console.log("bot is ready");
	const dataOfWinrate = await getWinrates();
	console.log(dataOfWinrate);
	module.exports = { dataOfWinrate };
});

eventsMessage(client);

client.login(process.env.DISCORD_TOKEN);
