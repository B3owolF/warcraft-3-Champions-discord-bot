function helperBattleTag(player) {
    const str = player.split('%')
    const playerNameEncode = encodeURIComponent(str[0])
    return `${playerNameEncode}%${str[1]}`
}

module.exports = {
  helperBattleTag
}