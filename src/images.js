const { loadImage } = require("canvas");
const Canvas = require("canvas");
const hero = {};

hero.am = __dirname + "/assets/archmage.0e407b7b.png" 
hero.mk = __dirname + "/assets/mountainking.2d45fe6d.png";
hero.paladin = __dirname + "/assets/paladin.f595991a.png";
hero.blm = __dirname + "/assets/sorceror.99bfe631.png";
hero.fs = __dirname + "/assets/farseer.1cc45987.png";
hero.bm = __dirname + "/assets/blademaster.a319f81a.png";
hero.sh = __dirname + "/assets/shadowhunter.b5bfcf5c.png" 
hero.tc = __dirname + "/assets/taurenchieftain.185f69ab.png";
hero.dk = __dirname + "/assets/deathknight.ff560544.png";
hero.lich = __dirname + "/assets/lich.34068253.png";
hero.dl = __dirname + "/assets/dreadlord.4799d761.png";
hero.cl = __dirname + "/assets/cryptlord.f6709dfc.png";
hero.dh = __dirname + "/assets/demonhunter.acc34a06.png";
hero.kotg = __dirname + "/assets/keeperofthegrove.14020b0a.png";
hero.warden = __dirname + "/assets/warden.782c3a74.png";
hero.potm = __dirname + "/assets/priestessofthemoon.d1eff884.png";
hero.fl = __dirname + "/assets/avatarofflame.a2cd4cf4.png";
hero.dr = __dirname + "/assets/bansheeranger.22d1fc9e.png";
hero.bem = __dirname + "/assets/beastmaster.864eca76.png";
hero.pb = __dirname + "/assets/pandarenbrewmaster.a6e0fb1a.png";
hero.pl = __dirname + "/assets/pitlord.5440e70a.png";
hero.nsw = __dirname + "/assets/seawitch.a5226e9b.png";
hero.tinker = __dirname + "/assets/tinker.04662773.png";
hero.alchemist = __dirname + "/assets/alchemist.f624263a.png";
hero.background = __dirname + "/assets/background.jpg";

hero.undefined = __dirname + "/assets/none.e9b22af6.png";
hero.race1 = __dirname + "/assets/HUMAN.86b68278.png";
hero.race2 = __dirname + "/assets/ORC.fe8d30a3.png";
hero.race8 = __dirname + "/assets/UNDEAD.eedab6ad.png";
hero.race4 = __dirname + "/assets/NIGHT_ELF.58a510d9.png";
hero.race0 = __dirname + "/assets/RANDOM.f67c1233.png";
hero.archmage = __dirname + "/assets/archmage.0e407b7b.png";
hero.mountainking = __dirname + "/assets/mountainking.2d45fe6d.png";
hero.paladin = __dirname + "/assets/paladin.f595991a.png";
hero.sorceror = __dirname + "/assets/sorceror.99bfe631.png";
hero.farseer = __dirname + "/assets/farseer.1cc45987.png";
hero.blademaster = __dirname + "/assets/blademaster.a319f81a.png";
hero.shadowhunter = __dirname + "/assets/shadowhunter.b5bfcf5c.png";
hero.taurenchieftain = __dirname + "/assets/taurenchieftain.185f69ab.png";
hero.deathknight = __dirname + "/assets/deathknight.ff560544.png";
hero.lich = __dirname + "/assets/lich.34068253.png";
hero.dreadlord = __dirname + "/assets/dreadlord.4799d761.png";
hero.cryptlord = __dirname + "/assets/cryptlord.f6709dfc.png";
hero.demonhunter = __dirname + "/assets/demonhunter.acc34a06.png";
hero.keeperofthegrove = __dirname + "/assets/keeperofthegrove.14020b0a.png";
hero.warden = __dirname + "/assets/warden.782c3a74.png";
hero.priestessofthemoon = __dirname + "/assets/priestessofthemoon.d1eff884.png";
hero.avatarofflame = __dirname + "/assets/avatarofflame.a2cd4cf4.png";
hero.bansheeranger = __dirname + "/assets/bansheeranger.22d1fc9e.png";
hero.beastmaster = __dirname + "/assets/beastmaster.864eca76.png";
hero.pandarenbrewmaster = __dirname + "/assets/pandarenbrewmaster.a6e0fb1a.png";
hero.pitlord = __dirname + "/assets/pitlord.5440e70a.png";
hero.seawitch = __dirname + "/assets/seawitch.a5226e9b.png";
hero.tinker = __dirname + "/assets/tinker.04662773.png";
hero.alchemist = __dirname + "/assets/alchemist.f624263a.png";
hero.concealedhill = "https://liquipedia.net/commons/images/8/8f/Concealed_Hill_1.2.png";
hero.echoisles = "https://liquipedia.net/commons/images/7/7d/Echo_Isles.png";
hero.twistedmeadows = "https://liquipedia.net/commons/images/e/ee/Twisted_Meadows.png";
hero.turtlerock = "https://liquipedia.net/commons/images/1/14/Turtle_Rock.png";
hero._1v1_autumnleaves_anon = "https://liquipedia.net/commons/images/e/e8/Wc3AutumnLeaves.png";
hero.amazonia = "https://liquipedia.net/commons/images/3/38/Amazonia.png";
hero.lastrefuge = "https://liquipedia.net/commons/images/9/9a/Last_Refuge.png";
hero.terenasstand = "https://liquipedia.net/commons/images/f/fe/Terenas_Stand_LV.png";
hero.northernisles = "https://liquipedia.net/commons/images/4/45/Northern_Isles.png";
hero.ruinsofazshara201016 = "https://liquipedia.net/commons/images/4/47/RuinsOfAzshara.png";
hero.Overall = __dirname + "/assets/all.d725e22d.png";
hero.all = __dirname + "/assets/all.d725e22d.png";

const loadImagesCanvas = async () => {
	for (const property in hero) {
		hero[property] = await loadImage(hero[property]);
	}
};

loadImagesCanvas().then(() => {
	console.log(hero);
});

module.exports = hero;

