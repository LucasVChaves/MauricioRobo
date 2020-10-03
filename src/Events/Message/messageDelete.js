const Event = require('../../Structures/Event');
const MauricioEmbed = require('../../Structures/MauricioEmbed');

module.exports = class extends Event {

     async run(message) {
          if (!message.guild || message.author.bot) return;
          const attachments = message.attachments.size ? message.attachments.map(attachment => attachments.proxyURL) : null;
          const embed = new MauricioEmbed()
               .setColor('RED')
               .setAuthor(message.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
               .setTitle('Mensagem Deletada')
               .setDescription([
                    `**❯ Id da mensagem:** ${message.id}`,
                    `**❯ Canal:** ${message.channel}`,
                    `**❯ Author:** ${message.member.displayName}`,
                    `${attachments ? `**❯ Anexos:** ${attachments.join('\n')}` : ''}`
               ]);
          if (message.content.length) {
               embed.splitFields(`**❯ Mensagem deletada:** ${message.content}`);
          }

          const channel = message.guild.channels.cache.find(ch => ch.name === 'roger');
          if (channel) channel.send(embed);
     }
}