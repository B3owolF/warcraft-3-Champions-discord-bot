const { loadImage } = require("canvas");
const hero = {};

hero.am = "https://www.w3champions.com/img/archmage.0e407b7b.png";
hero.mk = "https://www.w3champions.com/img/mountainking.2d45fe6d.png";
hero.paladin = "https://www.w3champions.com/img/paladin.f595991a.png";
hero.blm = "https://www.w3champions.com/img/sorceror.99bfe631.png";
hero.fs = "https://www.w3champions.com/img/farseer.1cc45987.png";
hero.bm = "https://www.w3champions.com/img/blademaster.a319f81a.png";
hero.sh = "https://www.w3champions.com/img/shadowhunter.b5bfcf5c.png";
hero.tc = "https://www.w3champions.com/img/taurenchieftain.185f69ab.png";
hero.dk = "https://www.w3champions.com/img/deathknight.ff560544.png";
hero.lich = "https://www.w3champions.com/img/lich.34068253.png";
hero.dl = "https://www.w3champions.com/img/dreadlord.4799d761.png";
hero.cl = "https://www.w3champions.com/img/cryptlord.f6709dfc.png";
hero.dh = "https://www.w3champions.com/img/demonhunter.acc34a06.png";
hero.kotg = "https://www.w3champions.com/img/keeperofthegrove.14020b0a.png";
hero.warden = "https://www.w3champions.com/img/warden.782c3a74.png";
hero.potm = "https://www.w3champions.com/img/priestessofthemoon.d1eff884.png";
hero.fl = "https://www.w3champions.com/img/avatarofflame.a2cd4cf4.png";
hero.dr = "https://www.w3champions.com/img/bansheeranger.22d1fc9e.png";
hero.bem = "https://www.w3champions.com/img/beastmaster.864eca76.png";
hero.pb = "https://www.w3champions.com/img/pandarenbrewmaster.a6e0fb1a.png";
hero.pl = "https://www.w3champions.com/img/pitlord.5440e70a.png";
hero.nsw = "https://www.w3champions.com/img/seawitch.a5226e9b.png";
hero.tinker = "https://www.w3champions.com/img/tinker.04662773.png";
hero.alchemist = "https://www.w3champions.com/img/alchemist.f624263a.png";
hero.background = "https://coolbackgrounds.io/images/backgrounds/black/black-radial-gradient-bb05ed79.jpg";
hero.undefined = "https://www.w3champions.com/img/none.e9b22af6.png";
hero.race1 = "https://www.w3champions.com/img/HUMAN.86b68278.png";
hero.race2 = "https://www.w3champions.com/img/ORC.fe8d30a3.png";
hero.race8 = "https://www.w3champions.com/img/UNDEAD.eedab6ad.png";
hero.race4 = "https://www.w3champions.com/img/NIGHT_ELF.58a510d9.png";
hero.race0 = "https://www.w3champions.com/img/RANDOM.f67c1233.png";

const loadImagesCanvas = async () => {
	for (const property in hero) {
		hero[property] = await loadImage(hero[property]);
	}
};

loadImagesCanvas().then(() => {
	console.log(hero);
});

module.exports = hero;
