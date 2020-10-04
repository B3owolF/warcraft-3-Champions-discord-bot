const { getMatch } = require('../services/');
const { matchEmbed } = require('./embed');

const showOponent = async (player, message) => {
   try {
    const playerData = await getMatch(player);
    matchEmbed(playerData, message);
    
   } catch (error) {
    message.channel.send('Wrong name or id');
   }
}

module.exports = showOponent;