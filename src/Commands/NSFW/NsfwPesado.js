const Command = require('../../Structures/Command');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pesadao'],
			description: 'NSFW pesado só pra quem tem o necessário para dar na rata.',
            category: 'NSFW',
            nsfw: false
		});
	}

	async run(message) {

		console.log("NSFWPesado command used.");

        message.channel.send(new MessageEmbed()
            .setImage('https://cdn.discordapp.com/attachments/321836042506207234/791799851225710602/Screenshot_30.png')
            .setColor('RED')
            .setTitle("Segura o gozo!")
        );
	}
};