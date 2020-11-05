const herosImages = require("../../images");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");

const canvasScore = async score => {
	const canvas = Canvas.createCanvas(900, 450);
	const ctx = canvas.getContext("2d");
	const racePlayerOne = "race" + score.racePlayerOne;
	const racePlayerTwo = "race" + score.racePlayerTwo;			
	ctx.drawImage(herosImages["background"], 0, 0, canvas.width, canvas.height);
	ctx.drawImage(herosImages[racePlayerOne], 200, 25, 200, 200);
	ctx.drawImage(herosImages[racePlayerTwo], 500, 25, 200, 200);

	ctx.font = "50px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText(score.namePlayerTwo, canvas.width-300-ctx.measureText(score.namePlayerTwo).width/2, 300);

	ctx.font = "50px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText(score.namePlayerOne, canvas.width/3-ctx.measureText(score.namePlayerOne).width/2, 300);			

	ctx.font = "50px Arial";
	ctx.fillStyle = "#fff";
	ctx.fillText(score.scorePlayerOne + " - " + score.scorePlayerTwo, canvas.width/2-ctx.measureText(score.scorePlayerOne + " - " + score.scorePlayerTwo).width/2, 350);

	const attachment = new MessageAttachment(canvas.toBuffer(), "image.png");
	return attachment;
};

module.exports = canvasScore;
