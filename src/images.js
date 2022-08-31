const { loadImage } = require("canvas");
const Canvas = require("canvas");
const hero = {};

hero.am = __dirname + "/assets/archmage.0e407b7b.png"
hero.mk = __dirname + "/assets/mountainking.2d45fe6d.png";
hero.paladin = __dirname + "/assets/paladin.f595991a.png";
hero.pala = __dirname + "/assets/paladin.f595991a.png";
hero.pn = __dirname + "/assets/paladin.f595991a.png";
hero.pd = __dirname + "/assets/paladin.f595991a.png";
hero.pa = __dirname + "/assets/paladin.f595991a.png";
hero.blm = __dirname + "/assets/sorceror.99bfe631.png";
hero.bloodmage = __dirname + "/assets/sorceror.99bfe631.png";
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
hero.firelord = __dirname + "/assets/avatarofflame.a2cd4cf4.png";
hero.dr = __dirname + "/assets/bansheeranger.22d1fc9e.png";
hero.darkranger = __dirname + "/assets/bansheeranger.22d1fc9e.png";
hero.bem = __dirname + "/assets/beastmaster.864eca76.png";
hero.pb = __dirname + "/assets/pandarenbrewmaster.a6e0fb1a.png";
hero.pl = __dirname + "/assets/pitlord.5440e70a.png";
hero.nsw = __dirname + "/assets/seawitch.a5226e9b.png";
hero.naga = __dirname + "/assets/seawitch.a5226e9b.png";
hero.tinker = __dirname + "/assets/tinker.04662773.png";
hero.alchemist = __dirname + "/assets/alchemist.f624263a.png";
hero.alch = __dirname + "/assets/alchemist.f624263a.png";
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
hero.panda = __dirname + "/assets/pandarenbrewmaster.a6e0fb1a.png";
hero.pitlord = __dirname + "/assets/pitlord.5440e70a.png";
hero.seawitch = __dirname + "/assets/seawitch.a5226e9b.png";
hero.tinker = __dirname + "/assets/tinker.04662773.png";
hero.alchemist = __dirname + "/assets/alchemist.f624263a.png";
hero.concealedhill = "https://liquipedia.net/commons/images/8/8f/Concealed_Hill_1.2.png";
hero.ConcealedHill = "https://liquipedia.net/commons/images/8/8f/Concealed_Hill_1.2.png";
hero.echoisles = "https://liquipedia.net/commons/images/7/7d/Echo_Isles.png";
hero.EchoIsles = "https://liquipedia.net/commons/images/7/7d/Echo_Isles.png";
hero['EchoIslesv2_2'] = "https://liquipedia.net/commons/images/3/3e/Wc3EchoIsles_v2_1.png"
hero.twistedmeadows = "https://liquipedia.net/commons/images/e/ee/Twisted_Meadows.png";
hero.turtlerock = "https://liquipedia.net/commons/images/1/14/Turtle_Rock.png";
hero.TurtleRock = "https://liquipedia.net/commons/images/1/14/Turtle_Rock.png";
hero.AutumnLeaves = "https://liquipedia.net/commons/images/e/e8/Wc3AutumnLeaves.png";
hero.autumnleaves = "https://liquipedia.net/commons/images/e/e8/Wc3AutumnLeaves.png";
hero['AutumnLeavesv2-0'] = "https://liquipedia.net/commons/images/e/e8/Wc3AutumnLeaves.png";
hero['AutumnLeavesv2_0'] = "https://liquipedia.net/commons/images/e/e8/Wc3AutumnLeaves.png";
hero.amazonia = "https://liquipedia.net/commons/images/3/38/Amazonia.png";
hero.Amazonia = "https://liquipedia.net/commons/images/3/38/Amazonia.png";
hero.tidehunters = "https://liquipedia.net/commons/images/6/60/Wc3TortoiseHaven.png"
hero.Tidehunters = "https://liquipedia.net/commons/images/6/60/Wc3TortoiseHaven.png"
hero['Tidehuntersv1_2'] = "https://liquipedia.net/commons/images/6/60/Wc3TortoiseHaven.png"
hero.ShallowGrave = 'https://liquipedia.net/commons/images/4/49/Wc3ShallowGrave.png'
hero.ruinsofazshara = "https://liquipedia.net/commons/images/4/47/RuinsOfAzshara.png"
hero.RuinsOfAzshara = "https://liquipedia.net/commons/images/4/47/RuinsOfAzshara.png"
hero.lastrefuge = "https://liquipedia.net/commons/images/9/9a/Last_Refuge.png";
hero.LastRefuge = "https://liquipedia.net/commons/images/9/9a/Last_Refuge.png";
hero.terenasstand = "https://liquipedia.net/commons/images/f/fe/Terenas_Stand_LV.png";
hero.TerenasStandLV = "https://liquipedia.net/commons/images/f/fe/Terenas_Stand_LV.png";
hero.northernisles = "https://liquipedia.net/commons/images/4/45/Northern_Isles.png";
hero.NorthernIsles = "https://liquipedia.net/commons/images/4/45/Northern_Isles.png";
hero.ruinsofazshara201016 = "https://liquipedia.net/commons/images/4/47/RuinsOfAzshara.png";
hero.Overall = __dirname + "/assets/all.d725e22d.png";
hero.all = __dirname + "/assets/all.d725e22d.png";
//hero.avatarTrue32 = __dirname + "/assets/special";
hero.avatarTrue10 = __dirname + "/assets/classic/HUMAN_0.jpg";
hero.avatarTrue11 = __dirname + "/assets/classic/HUMAN_1.jpg";
hero.avatarTrue110 = __dirname + "/assets/classic/HUMAN_10.jpg";
hero.avatarTrue12 = __dirname + "/assets/classic/HUMAN_2.jpg";
hero.avatarTrue13 = __dirname + "/assets/classic/HUMAN_3.jpg";
hero.avatarTrue14 = __dirname + "/assets/classic/HUMAN_4.jpg";
hero.avatarTrue15 = __dirname + "/assets/classic/HUMAN_5.jpg";
hero.avatarTrue16 = __dirname + "/assets/classic/HUMAN_6.jpg";
hero.avatarTrue17 = __dirname + "/assets/classic/HUMAN_7.jpg";
hero.avatarTrue18 = __dirname + "/assets/classic/HUMAN_8.jpg";
hero.avatarTrue19 = __dirname + "/assets/classic/HUMAN_9.jpg";
hero.avatarFalse10 = __dirname + "/assets/avatars/HUMAN_0.jpg";
hero.avatarFalse11 = __dirname + "/assets/avatars/HUMAN_1.jpg";
hero.avatarFalse110 = __dirname + "/assets/avatars/HUMAN_10.jpg";
hero.avatarFalse12 = __dirname + "/assets/avatars/HUMAN_2.jpg";
hero.avatarFalse13 = __dirname + "/assets/avatars/HUMAN_3.jpg";
hero.avatarFalse14 = __dirname + "/assets/avatars/HUMAN_4.jpg";
hero.avatarFalse15 = __dirname + "/assets/avatars/HUMAN_5.jpg";
hero.avatarFalse16 = __dirname + "/assets/avatars/HUMAN_6.jpg";
hero.avatarFalse17 = __dirname + "/assets/avatars/HUMAN_7.jpg";
hero.avatarFalse18 = __dirname + "/assets/avatars/HUMAN_8.jpg";
hero.avatarFalse19 = __dirname + "/assets/avatars/HUMAN_9.jpg";

hero.avatarFalse160 = __dirname + "/assets/avatars/TOTAL_0.jpg";
hero.avatarTrue160 = __dirname + "/assets/avatars/TOTAL_0.jpg";

hero.avatarTrue20 = __dirname + "/assets/classic/ORC_0.jpg";
hero.avatarTrue21 = __dirname + "/assets/classic/ORC_1.jpg";
hero.avatarTrue210 = __dirname + "/assets/classic/ORC_10.jpg";
hero.avatarTrue22 = __dirname + "/assets/classic/ORC_2.jpg";
hero.avatarTrue23 = __dirname + "/assets/classic/ORC_3.jpg";
hero.avatarTrue24 = __dirname + "/assets/classic/ORC_4.jpg";
hero.avatarTrue25 = __dirname + "/assets/classic/ORC_5.jpg";
hero.avatarTrue26 = __dirname + "/assets/classic/ORC_6.jpg";
hero.avatarTrue27 = __dirname + "/assets/classic/ORC_7.jpg";
hero.avatarTrue28 = __dirname + "/assets/classic/ORC_8.jpg";
hero.avatarTrue29 = __dirname + "/assets/classic/ORC_9.jpg";
hero.avatarFalse20 = __dirname + "/assets/avatars/ORC_0.jpg";
hero.avatarFalse21 = __dirname + "/assets/avatars/ORC_1.jpg";
hero.avatarFalse210 = __dirname + "/assets/avatars/ORC_10.jpg";
hero.avatarFalse22 = __dirname + "/assets/avatars/ORC_2.jpg";
hero.avatarFalse23 = __dirname + "/assets/avatars/ORC_3.jpg";
hero.avatarFalse24 = __dirname + "/assets/avatars/ORC_4.jpg";
hero.avatarFalse25 = __dirname + "/assets/avatars/ORC_5.jpg";
hero.avatarFalse26 = __dirname + "/assets/avatars/ORC_6.jpg";
hero.avatarFalse27 = __dirname + "/assets/avatars/ORC_7.jpg";
hero.avatarFalse28 = __dirname + "/assets/avatars/ORC_8.jpg";
hero.avatarFalse29 = __dirname + "/assets/avatars/ORC_9.jpg";

hero.avatarTrue40 = __dirname + "/assets/classic/NIGHT_ELF_0.jpg";
hero.avatarTrue41 = __dirname + "/assets/classic/NIGHT_ELF_1.jpg";
hero.avatarTrue410 = __dirname + "/assets/classic/NIGHT_ELF_10.jpg";
hero.avatarTrue42 = __dirname + "/assets/classic/NIGHT_ELF_2.jpg";
hero.avatarTrue43 = __dirname + "/assets/classic/NIGHT_ELF_3.jpg";
hero.avatarTrue44 = __dirname + "/assets/classic/NIGHT_ELF_4.jpg";
hero.avatarTrue45 = __dirname + "/assets/classic/NIGHT_ELF_5.jpg";
hero.avatarTrue46 = __dirname + "/assets/classic/NIGHT_ELF_6.jpg";
hero.avatarTrue47 = __dirname + "/assets/classic/NIGHT_ELF_7.jpg";
hero.avatarTrue48 = __dirname + "/assets/classic/NIGHT_ELF_8.jpg";
hero.avatarTrue49 = __dirname + "/assets/classic/NIGHT_ELF_9.jpg";
hero.avatarFalse40 = __dirname + "/assets/avatars/NIGHT_ELF_0.jpg";
hero.avatarFalse41 = __dirname + "/assets/avatars/NIGHT_ELF_1.jpg";
hero.avatarFalse410 = __dirname + "/assets/avatars/NIGHT_ELF_10.jpg";
hero.avatarFalse42 = __dirname + "/assets/avatars/NIGHT_ELF_2.jpg";
hero.avatarFalse43 = __dirname + "/assets/avatars/NIGHT_ELF_3.jpg";
hero.avatarFalse44 = __dirname + "/assets/avatars/NIGHT_ELF_4.jpg";
hero.avatarFalse45 = __dirname + "/assets/avatars/NIGHT_ELF_5.jpg";
hero.avatarFalse46 = __dirname + "/assets/avatars/NIGHT_ELF_6.jpg";
hero.avatarFalse47 = __dirname + "/assets/avatars/NIGHT_ELF_7.jpg";
hero.avatarFalse48 = __dirname + "/assets/avatars/NIGHT_ELF_8.jpg";
hero.avatarFalse49 = __dirname + "/assets/avatars/NIGHT_ELF_9.jpg";

hero.avatarTrue00 = __dirname + "/assets/classic/RANDOM_0.jpg";
hero.avatarTrue01 = __dirname + "/assets/classic/RANDOM_1.jpg";
hero.avatarTrue010 = __dirname + "/assets/classic/RANDOM_10.jpg";
hero.avatarTrue02 = __dirname + "/assets/classic/RANDOM_2.jpg";
hero.avatarTrue03 = __dirname + "/assets/classic/RANDOM_3.jpg";
hero.avatarTrue04 = __dirname + "/assets/classic/RANDOM_4.jpg";
hero.avatarTrue05 = __dirname + "/assets/classic/RANDOM_5.jpg";
hero.avatarTrue06 = __dirname + "/assets/classic/RANDOM_6.jpg";
hero.avatarTrue07 = __dirname + "/assets/classic/RANDOM_7.jpg";
hero.avatarTrue08 = __dirname + "/assets/classic/RANDOM_8.jpg";
hero.avatarTrue09 = __dirname + "/assets/classic/RANDOM_9.jpg";
hero.avatarFalse00 = __dirname + "/assets/avatars/RANDOM_0.jpg";
hero.avatarFalse01 = __dirname + "/assets/avatars/RANDOM_1.jpg";
hero.avatarFalse010 = __dirname + "/assets/avatars/RANDOM_10.jpg";
hero.avatarFalse02 = __dirname + "/assets/avatars/RANDOM_2.jpg";
hero.avatarFalse03 = __dirname + "/assets/avatars/RANDOM_3.jpg";
hero.avatarFalse04 = __dirname + "/assets/avatars/RANDOM_4.jpg";
hero.avatarFalse05 = __dirname + "/assets/avatars/RANDOM_5.jpg";
hero.avatarFalse06 = __dirname + "/assets/avatars/RANDOM_6.jpg";
hero.avatarFalse07 = __dirname + "/assets/avatars/RANDOM_7.jpg";
hero.avatarFalse08 = __dirname + "/assets/avatars/RANDOM_8.jpg";
hero.avatarFalse09 = __dirname + "/assets/avatars/RANDOM_9.jpg";

hero.avatarTrue80 = __dirname + "/assets/classic/UNDEAD_0.jpg";
hero.avatarTrue81 = __dirname + "/assets/classic/UNDEAD_1.jpg";
hero.avatarTrue810 = __dirname + "/assets/classic/UNDEAD_10.jpg";
hero.avatarTrue82 = __dirname + "/assets/classic/UNDEAD_2.jpg";
hero.avatarTrue83 = __dirname + "/assets/classic/UNDEAD_3.jpg";
hero.avatarTrue84 = __dirname + "/assets/classic/UNDEAD_4.jpg";
hero.avatarTrue85 = __dirname + "/assets/classic/UNDEAD_5.jpg";
hero.avatarTrue86 = __dirname + "/assets/classic/UNDEAD_6.jpg";
hero.avatarTrue87 = __dirname + "/assets/classic/UNDEAD_7.jpg";
hero.avatarTrue88 = __dirname + "/assets/classic/UNDEAD_8.jpg";
hero.avatarTrue89 = __dirname + "/assets/classic/UNDEAD_9.jpg";
hero.avatarFalse80 = __dirname + "/assets/avatars/UNDEAD_0.jpg";
hero.avatarFalse81 = __dirname + "/assets/avatars/UNDEAD_1.jpg";
hero.avatarFalse810 = __dirname + "/assets/avatars/UNDEAD_10.jpg";
hero.avatarFalse82 = __dirname + "/assets/avatars/UNDEAD_2.jpg";
hero.avatarFalse83 = __dirname + "/assets/avatars/UNDEAD_3.jpg";
hero.avatarFalse84 = __dirname + "/assets/avatars/UNDEAD_4.jpg";
hero.avatarFalse85 = __dirname + "/assets/avatars/UNDEAD_5.jpg";
hero.avatarFalse86 = __dirname + "/assets/avatars/UNDEAD_6.jpg";
hero.avatarFalse87 = __dirname + "/assets/avatars/UNDEAD_7.jpg";
hero.avatarFalse88 = __dirname + "/assets/avatars/UNDEAD_8.jpg";
hero.avatarFalse89 = __dirname + "/assets/avatars/UNDEAD_9.jpg";

hero.background1 = __dirname + "/assets/backgrounds/humanbackground.png"
hero.background2 = __dirname + "/assets/backgrounds/orcBackground.png"
hero.background4 = __dirname + "/assets/backgrounds/elfbackground.png"
hero.background8 = __dirname + "/assets/backgrounds/undeadbackground.png"
hero.background0 = __dirname + "/assets/backgrounds/randomRace.png"

hero.ADEPT = __dirname + "/assets/leagueIcons/adept.png";
hero.BRONZE = __dirname + "/assets/leagueIcons/bronze.png";
hero.DIAMOND = __dirname + "/assets/leagueIcons/diamond.png";
hero.GOLD = __dirname + "/assets/leagueIcons/gold.png";
hero.GRANDMASTER = __dirname + "/assets/leagueIcons/grandmaster.png";
hero.GRASS = __dirname + "/assets/leagueIcons/grass.png";
hero.MASTER = __dirname + "/assets/leagueIcons/master.png";
hero.PLATINUM = __dirname + "/assets/leagueIcons/platinum.png";
hero.SILVER = __dirname + "/assets/leagueIcons/silver.png";

const loadImagesCanvas = async () => {
  for (const property in hero) {
    hero[property] = await loadImage(hero[property]);
  }
};

loadImagesCanvas().then(() => {
  console.log(hero);
});

module.exports = hero;

