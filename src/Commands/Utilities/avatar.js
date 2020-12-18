const { DiscordAPIError, MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
               aliases:['aang'],
               description: 'Manda seu avatar, ou de um membro marcado.',
               category: 'Utilidades',
               Usage: '>avatar <@user>'
          });
	}

	async run(message, [target]) {
          const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

          const embed = new MessageEmbed()
               .setColor('CYAN')
               .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}));
          
          console.log("Avatar command used.");

          message.channel.send(embed);
	}

};