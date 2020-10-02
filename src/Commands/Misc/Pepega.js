const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ppg'],
			description: 'Pepega huehuehue',
			category: 'Misc'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Pepega KEKW Kappa BibleThump :', {files: ['img/kelves.png']});
	}
};