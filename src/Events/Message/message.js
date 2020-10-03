const Event = require('../../Structures/Event');

module.exports = class extends Event {

	async run(message) {
		const mentionRegex = RegExp(`^<@!?${this.client.user.id}>$`);
		const mentionRegexPrefix = RegExp(`^<@!?${this.client.user.id}> `);

		if (!message.guild || message.author.bot) return;

		if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${this.client.prefix}\`.`);

		const prefix = message.content.match(mentionRegexPrefix) ?
			message.content.match(mentionRegexPrefix)[0] : this.client.prefix;
		
		if(!message.content.startsWith(prefix)) return;

		const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

		const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
		if (command) {
			if(command.ownerOnly && !this.client.utils.checkOwner(message.author)){
				return message.reply("Desculpa, só meus donos podem utilizar esse comando! *(Sim eu tenho donos me ajuda)*");
			}

			if (command.nsfw && !message.channel.nsfw) {
				return message.reply("Esse comando só pode ser usado em canais NSFW. E esse aqui não é safadinho o suficiente.");
			}

			if(command.args && !args.length){
				return message.reply(`Esse comando necessita de argumentos para funcionar. Utilização: ${command.usage ? 
					`${this.client.prefix} ${command.usage}` : "Utilização não fornecida."}.`);
			}

			const userPermCheck = command.userPerms ? this.client.defaultPerms.add(command.userPerms) : this.client.defaultPerms;
			if(userPermCheck){
				const missing = message.channel.permissionsFor(message.member).missing(userPermCheck);
				if(missing.length){
					return message.reply(`Você não tem a permissão ${this.client.utils.formatArray(missing.map(this.client.utils.formatPerms))}  para usar o comando.`);
				}
			}

			const botPermCheck = command.botPerms ? this.client.defaultPerms.add(command.botPerms) : this.client.defaultPerms;
			if(botPermCheck){
				const missing = message.channel.permissionsFor(message.member).missing(botPermCheck);
				if(missing.length){
					return message.reply(`O Bot não tem a permissão ${this.client.utils.formatArray(missing.map(this.client.utils.formatPerms))}  para usar o comando.`);
				}
			}

			command.run(message, args);
		}
	}

}; 