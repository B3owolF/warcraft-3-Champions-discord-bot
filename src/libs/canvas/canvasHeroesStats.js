const herosImage = require("../../images");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const hero = require("../../images");

const canvasHeroesStats = async (firstHeros, secondHeroes, statsHeroes) => {	

	const canvas = Canvas.createCanvas(900, 450);
	const ctx = canvas.getContext("2d");

  ctx.drawImage(herosImage["background"], 0, 0, canvas.width, canvas.height);

	ctx.drawImage(herosImage[firstHeros[0]], 25, 25, 100, 100);

	ctx.drawImage(herosImage[firstHeros[1]], 135, 25, 100, 100);

  ctx.drawImage(herosImage[firstHeros[2]], 245, 25, 100, 100);

	ctx.drawImage(herosImage[secondHeroes[0]], 555, 25, 100, 100);			
	
	ctx.drawImage(herosImage[secondHeroes[1]], 665, 25, 100, 100); 

	ctx.drawImage(herosImage[secondHeroes[2]], 775, 25, 100, 100);
	
  ctx.font = "50px Arial";
	ctx.fillStyle = "#fff";			
  ctx.fillText(Math.round(statsHeroes.winrate * 100) + "%", 400, 200);

	ctx.font = "50px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText(statsHeroes.wins + " - " + statsHeroes.losses, 370, 300);			
				
	const attachment = new MessageAttachment(canvas.toBuffer(), "image.png");

	return attachment;
};

module.exports = canvasHeroesStats;
module.exports = canvasHeroesStats;
module.exports = canvasHeroesStats;
