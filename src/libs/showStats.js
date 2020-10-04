const { getStats } = require('../services/index')

const showStats = async (player, server, message) => {
  const stats = await getStats(player, server);
  return { player, stats, message };
}; 

module.exports = showStats;