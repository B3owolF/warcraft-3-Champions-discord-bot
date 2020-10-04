const Discord = require('discord.js');
const { getLeagues } = require('../services/');

const emojiUnd = '<:undead:762111221477670942>';
const emojiOrc = '<:Orc:762111149516783637>';
const emojiNe = '<:NE:762111289363005450>';
const emojiHum = '<:Hum:762111044038033408>';
const emojiRdm = '<:Rdm:762136144137158656>';
const emojiGrandMaster = '<:GM:762322281371664385>';
const emojiMaster = '<:master:762322420253065216>';
const emojiDiamond = '<:Diamond:762323081041149982>';
const emojiPlatinum = '<:platinum:762322351161212969>';
const emojiGold = '<:gold:762322312321826848>';
const emojiSilver = '<:silver:762322243434053653>';
const emojiBronze = '<:Bronze:762322183589855295>';

const playerEmbed = async (name, stats, message, indexLeague) => {
try{
    let embed = new Discord.MessageEmbed();
    let avatar;
    let race;
    let leagueName;
    let iconRace;

    const leagues = await getLeagues();

    for(let i = 0; i<leagues[indexLeague].leagues.length; i++){
        if(stats[0].leagueId === leagues[indexLeague].leagues[i].id){
            leagueName = leagues[indexLeague].leagues[i].name;
        }
    }

    if(leagueName === 'Grand Master'){
        leagueName = emojiGrandMaster;
    }else if(leagueName === 'Master'){
        leagueName = emojiMaster
    }else if(leagueName === 'Diamond'){
        leagueName = emojiDiamond;
    }else if(leagueName === 'Platinum'){
        leagueName = emojiPlatinum;
    }else if(leagueName === 'Gold'){
        leagueName = emojiGold
    }else if(leagueName === 'Silver'){
        leagueName = emojiSilver
    }else if(leagueName === 'Bronze'){
        leagueName = emojiBronze
    }


   embed.addField('Rank', stats[0].rank, true);
   embed.addField('Mode', '1v1', true);
   embed.addField('League', leagueName, true);

    if(stats[0].race === 1){
        iconRace = emojiHum;
        avatar = 'https://www.w3champions.com/img/HUMAN_5.d1dc4cdb.jpg';
    }
    else if(stats[0].race === 2){
        iconRace = emojiOrc;
        avatar = 'https://www.w3champions.com/img/ORC_8.5edd8d2f.jpg';
    }
    else if(stats[0].race === 4){
        iconRace = emojiNe;
        avatar = 'https://www.w3champions.com/img/NIGHT_ELF_3.9e45e17e.jpg';
    }
    else if(stats[0].race === 8){
        iconRace = emojiUnd;
        avatar = 'https://www.w3champions.com/img/UNDEAD_3.9f344919.jpg';
    }
    else if(stats[0].race === 0){
        iconRace = emojiRdm;
        avatar = 'data:image/jpeg;base64,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'
    }
    
    if(stats[0].race === 1){
        race = 'Human';
        embed.addF0elds(
            { name: race, value: stats[0].wins + ' - ' +  stats[0].losses + '  (' + Math.round(stats[0].winrate * 100) + '%)', inline: true },
            { name:'Mmr', value: stats[0].mmr, inline: true},
            { name:'RP', value: stats[0].rankingPoints, inline: true}
        );
    }
    else if(stats[0].race === 2){
        race = 'Orc';
        embed.addFields(
            { name: race, value: stats[0].wins + ' - ' +  stats[0].losses + '  (' + Math.round(stats[0].winrate * 100) + '%)', inline: true },
            { name:'Mmr', value: stats[0].mmr, inline: true},
            { name:'RP', value: stats[0].rankingPoints, inline: true}
        );
    }
    else if(stats[0].race === 4){
        race = 'Night';
        embed.addFields(
            { name: race, value: stats[0].wins + ' - ' +  stats[0].losses + '  (' + Math.round(stats[0].winrate * 100) + '%)', inline: true },
            { name:'Mmr', value: stats[0].mmr, inline: true},
            { name:'RP', value: stats[0].rankingPoints, inline: true}
        );
    }
    else if(stats[0].race === 8){
        race = 'Undead';
        embed.addFields(
            { name: race, value: stats[0].wins + ' - ' +  stats[0].losses + '  (' + Math.round(stats[0].winrate * 100) + '%)', inline: true },
            { name:'Mmr', value: stats[0].mmr, inline: true},
            { name:'RP', value: stats[0].rankingPoints, inline: true}
        );
    }
    else if(stats[0].race === 0){
        race = 'Random';
        embed.addFields(
            { name: race, value: stats[0].wins + ' - ' +  stats[i].losses + '  (' + Math.round(stats[0].winrate * 100) + '%)', inline: true },
            { name:'Mmr', value: stats[0].mmr, inline: true},
            { name:'RP', value: stats[0].rankingPoints, inline: true}
        );
    }

    embed
    .setColor('#0099ff')
    .setTitle(name + ' ' + iconRace)
    .setThumbnail(avatar);
    
    return message.channel.send(embed);
}catch(error){
    console.log(error);
    return message.channel.send('Wrong name or id');
}
}

const playerByName = async (name, stats, message, indexLeague) => {
    try{
        let embed = new Discord.MessageEmbed();
        let avatar;
        let race;
        let leagueName;
        let iconRace;
    
        const leagues = await getLeagues();
    
        for(let i = 0; i<leagues[indexLeague].leagues.length; i++){
            if(stats[0].league === leagues[indexLeague].leagues[i].id){
                leagueName = leagues[indexLeague].leagues[i].name;
            }
        }

        if(leagueName === 'Grand Master'){
            leagueName = emojiGrandMaster;
        }else if(leagueName === 'Master'){
            leagueName = emojiMaster
        }else if(leagueName === 'Diamond'){
            leagueName = emojiDiamond;
        }else if(leagueName === 'Platinum'){
            leagueName = emojiPlatinum;
        }else if(leagueName === 'Gold'){
            leagueName = emojiGold
        }else if(leagueName === 'Silver'){
            leagueName = emojiSilver
        }else if(leagueName === 'Bronze'){
            leagueName = emojiBronze
        }
    
    
        if(stats[0].player.race === 1){
            iconRace = emojiHum;
            avatar = 'https://www.w3champions.com/img/HUMAN_5.d1dc4cdb.jpg';
        }
        else if(stats[0].player.race === 2){
            iconRace = emojiOrc;
            avatar = 'https://www.w3champions.com/img/ORC_8.5edd8d2f.jpg';
        }
        else if(stats[0].player.race === 4){
            iconRace = emojiNe;
            avatar = 'https://www.w3champions.com/img/NIGHT_ELF_3.9e45e17e.jpg';
        }
        else if(stats[0].player.race === 8){
            iconRace = emojiUnd;
            avatar = 'https://www.w3champions.com/img/UNDEAD_3.9f344919.jpg';
        }
        else if(stats[0].player.race === 0){
            iconRace = emojiRdm;
            avatar = 'https://www.w3champions.com/img/RANDOM_0.6f9d5340.jpg'
        }

        embed.addField('Rank', stats[0].rankNumber, true);
        embed.addField('Mode', '1v1', true);
        embed.addField('League', leagueName, true);
        
        if(stats[0].player.race === 1){
            race = 'Human';
            embed.addFields(
                { name: race, value: stats[0].player.wins + ' - ' +  stats[0].player.losses + '  (' + Math.round(stats[0].player.winrate * 100) + '%)', inline: true },
                { name:'Mmr', value: stats[0].player.mmr, inline: true},
                { name:'RP', value: stats[0].rankingPoints, inline: true}
            );
        }
        else if(stats[0].race === 2){
            race = 'Orc';
            embed.addFields(
                { name: race, value: stats[0].player.wins + ' - ' +  stats[0].player.losses + '  (' + Math.round(stats[0].player.winrate * 100) + '%)', inline: true },
                { name:'Mmr', value: stats[0].player.mmr, inline: true},
                { name:'RP', value: stats[0].rankingPoints, inline: true}
            );
        }
        else if(stats[0].race === 4){
            race = 'Night';
            embed.addFields(
                { name: race, value: stats[0].player.wins + ' - ' +  stats[0].player.losses + '  (' + Math.round(stats[0].player.winrate * 100) + '%)', inline: true },
                { name:'Mmr', value: stats[0].player.mmr, inline: true},
                { name:'RP', value: stats[0].rankingPoints, inline: true}
            );
        }
        else if(stats[0].race === 8){
            race = 'Undead';
            embed.addFields(
                { name: race, value: stats[0].player.wins + ' - ' +  stats[0].player.losses + '  (' + Math.round(stats[0].player.winrate * 100) + '%)', inline: true },
                { name:'Mmr', value: stats[0].player.mmr, inline: true},
                { name:'RP', value: stats[0].rankingPoints, inline: true}
            );
        }
        else if(stats[0].race === 0){
            race = 'Random';
            embed.addFields(
                { name: race, value: stats[0].player.wins + ' - ' +  stats[0].player.losses + '  (' + Math.round(stats[0].player.winrate * 100) + '%)', inline: true },
                { name:'Mmr', value: stats[0].player.mmr, inline: true},
                { name:'RP', value: stats[0].rankingPoints, inline: true}
            );
        }
    
        embed
        .setColor('#0099ff')
        .setTitle(name + ' ' + iconRace)
        .setThumbnail(avatar);

        
        return message.channel.send(embed);
    }catch(error){
        console.log(error);
        return message.channel.send('Wrong name or id');
    }
    }

const matchEmbed = (player, message) => {
    let embed = new Discord.MessageEmbed();

    embed.setColor('#0099ff')
    .setTitle('Game')
    .setThumbnail('https://www.w3champions.com/img/grandmaster.9613f56f.png')
    .addFields(
        { name: 'Match', value: player.teams[0].players[0].battleTag + '  VS  ' + player.teams[1].players[0].battleTag },
        { name: 'Map', value: player.map }
    )
    message.channel.send(embed);
}

const rankingEmbed = (ranking, message, img) => {
    let embed = new Discord.MessageEmbed();
    let embed2 = new Discord.MessageEmbed();
    let embed3 = new Discord.MessageEmbed();
    let embed4 = new Discord.MessageEmbed();

    embed
    .setColor('#0099ff')
    .setTitle('RANKING')
    .setThumbnail(img);

    ranking.map((player, i) => {
        if(i < 25){
            embed.addFields(
                { name: player.player1Id, value: 'Rank: ' + player.rankNumber, inline: true },
            )
        }else{
            if(i < 50){
                
                embed2.addFields(
                    { name: player.player1Id, value: 'Rank: ' + player.rankNumber, inline: true },
                );
            }else{
                if(i < 75){
                    embed3.addFields(
                        { name: player.player1Id, value: 'Rank: ' + player.rankNumber, inline: true },
                    );
                }else{
                    if(i < 100){
                        embed4.addFields(
                            { name: player.player1Id, value: 'Rank: ' + player.rankNumber, inline: true },
                        );
                    }
                }
            }
        }

    });

    if(embed.fields.length !== 0){
        message.channel.send(embed);
    }
    if(embed2.fields.length !== 0){
        embed2.setColor('#0099ff');
        message.channel.send(embed2);
    }
    if(embed3.fields.length !== 0){
        embed3.setColor('#0099ff');
        message.channel.send(embed3);
    }
    if(embed4.fields.length !== 0){
        embed4.setColor('#0099ff');
        message.channel.send(embed4);
    }
}

const matchesEmbed = (matchesList, message) => {

    let embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('MATCHES')
    .setThumbnail('https://www.w3champions.com/img/grandmaster.9613f56f.png');
    
    for(let i = 0; i<matchesList.matches.length; i++){
        embed.addFields(
            { name: 'Match', value: matchesList.matches[i].teams[0].players[0].battleTag + ' VS ' + matchesList.matches[i].teams[1].players[0].battleTag}
        )
    }
    message.channel.send(embed);
}


const helpEmbed = (message) => {
    let embed = new Discord.MessageEmbed();
    embed.setColor('#0099ff')
    .setTitle('Commands')
    .addFields(
        {name: '!profile name battleTag', value: 'Example: !profile Grubby'},
        {name: '!vs name battleTag', value: 'Example: !vs Grubby 1278'},
        {name: '!Ranking league server', value: 'Example: !Ranking Grand Master Europe'},
        {name: '!Matches server', value: 'Example: !Matches Europe'},
    )
    message.channel.send(embed);
}


module.exports = { playerEmbed, rankingEmbed, matchesEmbed, helpEmbed, matchEmbed, playerByName }