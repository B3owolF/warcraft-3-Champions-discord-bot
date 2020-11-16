const { getPlayerByName } = require("../services");

const getBattleTag = async (player, server) => {
				const playerData = await getPlayerByName(player, server);
				return playerData.player.playerIds[0].battleTag.replace(/#/gi, "%23");
}

module.exports = getBattleTag;
