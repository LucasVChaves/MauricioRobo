const Command = require('../../Structures/Command');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ppg'],
			description: 'Pepega huehuehue',
			category: 'Images'
		});
	}

	async run(message) {

		console.log("Pepega command used.");

		message.channel.send(new MessageEmbed().setImage('https://cdn.discordapp.com/attachments/321836042506207234/761783244869206016/Screenshot_668.png'));
	}
};