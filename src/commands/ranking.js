const { getLeagues } = require("../services/");
const ranking = require("../libs/Ranking");

module.exports = {
	name: "ranking",
	alias: [],
	run: async (client, message, args) => {
		try {
			let section = args[0] + " " + args[1];
			let server = args[2];

			let img;
			let indexLeague = 1;

			const leagues = await getLeagues();

			const grandMaster = "https://www.w3champions.com/img/grandmaster.9613f56f.png";
			const master = "https://www.w3champions.com/img/master.4ddcd330.png";
			const diamond = "https://www.w3champions.com/img/diamond.86df1d96.png";
			const platinum = "https://www.w3champions.com/img/platinum.24bc49fa.png";
			const gold = "https://www.w3champions.com/img/gold.fe8039cf.png";
			const silver = "https://www.w3champions.com/img/silver.0c6ea3fc.png";
			const bronze = "https://www.w3champions.com/img/bronze.ce21aafe.png";

			section = section.toLowerCase();

			let firstWord = args[0];

			if (firstWord === "grand") {
				img = grandMaster;
				section = section + " " + 0;
			}

			if (firstWord === "master") {
				img = master;
				section = section.replace(/1/gi, 0);
			}

			if (firstWord === "diamond") {
				img = diamond;
			}

			if (firstWord === "platinum") {
				img = platinum;
			}

			if (firstWord === "gold") {
				img = gold;
			}

			if (firstWord === "silver") {
				img = silver;
			}

			if (firstWord === "bronze") {
				img = bronze;
			}

			if (server === "america") {
				for (let i = 0; i < leagues[1].leagues.length; i++) {
					if (section === leagues[1].leagues[i].name.toLowerCase() + " " + leagues[1].leagues[i].division) {
						indexLeague = leagues[1].leagues[i].id;
					}
				}
				return ranking(message, indexLeague, 10, img);
			}

			if (server === "europe") {
				for (let i = 0; i < leagues[2].leagues.length; i++) {
					if (section === leagues[2].leagues[i].name.toLowerCase() + " " + leagues[2].leagues[i].division) {
						indexLeague = leagues[2].leagues[i].id;
					}
				}
				return ranking(message, indexLeague, 20, img);
			}
			message.channel.send("Error");
		} catch (err) {
			console.log(err);
		}
	}
};
