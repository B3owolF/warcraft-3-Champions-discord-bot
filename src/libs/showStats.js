const { getPlayerByName } = require("../services/index");

const showStats = async (player, server, message) => {
	const stats = await getPlayerByName(player, server);
	return { player, stats, message };
};

module.exports = showStats;
