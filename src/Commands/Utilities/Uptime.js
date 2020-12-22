const Command = require('../../Structures/Command.js');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases:['up'],
            description: 'Mostra há quanto tempo o Bot está online.',
			category: 'Utilidades',
        });
	}

	async run(message) {
		message.channel.send(`Meu tempo on é \`${ms(this.client.uptime, {long:true})}\``);
		console.log("Uptime command used.");
	}

};