const { getStatsHeros } = require("../services");
const canvasHeroesStats = require("../libs/canvas/canvasHeroesStats");

const heroesNames = {
  bm: "blademaster",
  sh: "shadowhunter",
  tc: "taurenchieftain",
  fs: "farseer",
  dk: "deathknight",
  lich: "lich",
  dl: "dreadlord",
  cl: "cryptlord",
  dh: "demonhunter",
  kotg: "keeperofthegrove",
  potm: "priestessofthemoon",
  warden: "warden",
  paladin: "paladin",
  am: "archmage",
  mk: "mountainking",
  blm: "sorceror",
  bem: "beastmaster",
  fl: "avatarofflame",
  dr: "bansheeranger",
  nsw: "seawitch",
  pb: "pandarenbrewmaster",
  tinker: "tinker",
  alchemist: "alchemist",
  pl: "pitlord",
  undefined: "none",
  all: "all"
};


module.exports = {
  name: "statshero",
  alias: [],
  run: async (client, message, args) => {
    try {
      let firstHeroes = [];
      let secondHeroes = [];
      let index = args.indexOf("vs");

      if (args.find(arg => arg === "v")) {
        index = args.indexOf("v");
        for (let i = 0; i < 7; i++) {
          if (i < index && args[i]) {
            firstHeroes.push(args[i]);
          }
          else if(!args[i]){
            firstHeroes.push("all");
          }
          if (i > index && args[i]) {
            secondHeroes.push(args[i]);
          }
          else if(!args[i]){
            secondHeroes.push("all");
          }
        }
        const stats = await getStatsHeros(
          heroesNames[firstHeroes[0]],
          heroesNames[firstHeroes[1]],
          heroesNames[firstHeroes[2]],
          heroesNames[secondHeroes[0]],
          heroesNames[secondHeroes[1]],
          heroesNames[secondHeroes[2]]
        );

        if (Math.round(stats.winrate * 100) === 0) {
          return message.channel.send("no statistics found");
        }
        const image = await canvasHeroesStats(firstHeroes, secondHeroes, stats);
        return message.channel.send(image);

      }

      if (index === -1) {
        for (let i = 0; i < 6; i++) {
          if (args[i]) {
            firstHeroes.push(args[i]);
          } else if (i < 3) {
            firstHeroes.push("all");
          } else {
            secondHeroes.push("all");
          }
        }
        const stats = await getStatsHeros(
          heroesNames[firstHeroes[0]],
          heroesNames[firstHeroes[1]],
          heroesNames[firstHeroes[2]],
          heroesNames[secondHeroes[0]],
          heroesNames[secondHeroes[1]],
          heroesNames[secondHeroes[2]]
        );
        if (Math.round(stats.winrate * 100) === 0) {
          return message.channel.send("no statistics found");
        }
        const image = await canvasHeroesStats(firstHeroes, secondHeroes, stats);
        return message.channel.send(image);
      }

      for (let i = 0; i < args.length; i++) {
        if (i < index) {
          firstHeroes.push(args[i]);
        }
        if (i > index) {
          secondHeroes.push(args[i]);
        }
      }

      const stats = await getStatsHeros(
        heroesNames[firstHeroes[0]],
        heroesNames[firstHeroes[1]],
        heroesNames[firstHeroes[2]],
        heroesNames[secondHeroes[0]],
        heroesNames[secondHeroes[1]],
        heroesNames[secondHeroes[2]]
      );
      if (Math.round(stats.winrate * 100) === 0) {
        return message.channel.send("no statistics found");
      }
      const image = await canvasHeroesStats(firstHeroes, secondHeroes, stats);
      return message.channel.send(image);
    } catch (err) {
      console.log(err);
    }
  }
};
