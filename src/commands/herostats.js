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
	fl: "firelord",
	dr: "bansheeranger",
	nsw: "seawitch",
	pb: "pandarenbrewmaster",
	tinker: "tinker",
	alchemist: "alchemist",
	pl: "pitlord",
	undefined: "none"
};


module.exports = {
	name: "statshero",
	alias: [],
	run: async (client, message, args) => {
		try {
			let firstHeroes = [];
			let secondHeroes = [];
			const index = args.indexOf("vs");
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
			message.channel.send(image);
		} catch (err) {
			console.log(err);
		}
	}
};
