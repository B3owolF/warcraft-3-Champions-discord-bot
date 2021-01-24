const herosImages = require("../../images");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const fetch = require("node-fetch");
const getStatsByMode = require("../../services/getstatsbymode");
const getStatsByRace = require("../../services/getstatsbyrace");

const raceOfPicture = {
  race32: "SPECIAL",
  race1: "HUMAN",
  race2: "ORC",
  race4: "NIGHT_ELF",
  race8: "UNDEAD",
  race0: "RANDOM",
  race16: "TOTAL"
}

const canvasProfile = async (stats) => {
  Canvas.registerFont('MesloLGS NF Regular.ttf', { family: 'MesloLGS NF Regular.ttf' });

  const statsByMode = await getStatsByMode(stats.player1Id.replace(/#/gi, "%23"), 20);
  const statsByRace = await getStatsByRace(stats.player1Id.replace(/#/gi, "%23"), 20);

  let height = (statsByMode.length * 80) + 800;

	const canvas = Canvas.createCanvas(2000, height);

  const response = await fetch(`https://statistic-service.w3champions.com/api/personal-settings/${stats.player1Id.replace(/#/gi, "%23")}`);
  const personalSettings = await response.json();

	const ctx = canvas.getContext("2d");
	ctx.drawImage(herosImages["background"], 0, 0, canvas.width, canvas.height);

  let avatar;

    if(personalSettings.profilePicture.isClassic){
      avatar = `https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/classic/${raceOfPicture["race" + personalSettings.profilePicture.race]}_${personalSettings.profilePicture.pictureId}.jpg`;
    }if(raceOfPicture["race" + personalSettings.profilePicture.race] === "SPECIAL"){
      avatar = `https://w3champions.wc3.tools/prod/integration/icons/specialAvatars/SPECIAL_${personalSettings.profilePicture.pictureId}.jpg`
    }if(personalSettings.profilePicture.isClassic === false && raceOfPicture["race" + personalSettings.profilePicture.race] !== "SPECIAL"){
      avatar = `https://w3champions.wc3.tools/prod/integration/icons/raceAvatars/${raceOfPicture["race" + personalSettings.profilePicture.race]}_${personalSettings.profilePicture.pictureId}.jpg`
    }
    console.log(avatar)

  ctx.drawImage(avatar, 0, 0, 100, 100);

	const attachment = new MessageAttachment(canvas.toBuffer(), "image.png");
	return attachment;
};

module.exports = canvasProfile;