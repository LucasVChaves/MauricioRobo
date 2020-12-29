const {MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
               aliases:['aang'],
               description: 'Manda seu avatar, ou de um membro marcado.',
               category: 'Utilidades',
               usage: '[@user]'
          });
	}

	async run(message, [target]) {
          console.log("Avatar command used.");
          const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

          const embed = new MessageEmbed()
               .setColor('CYAN')
               .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}));

          message.channel.send(embed);
	}
};