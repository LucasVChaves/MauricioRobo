const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['hallo', 'oi', 'salve'],
			description: 'Te da um oizinho.',
			category: "Misc"
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Salve vadio!! :top: :sunglasses: ');
	}

};