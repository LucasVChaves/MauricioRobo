const Command = require('../../Structures/Command.js');
const ms = require('ms');

module.exports = class extends Command {

	async run(message) {
		message.channel.send(`Meu tempo on é \`${ms(this.client.uptime, {long:true})}\``);
	}

};