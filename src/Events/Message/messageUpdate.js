const Event = require('../../Structures/Event');
const MauricioEmbed = require('../../Structures/MauricioEmbed');
const { Util: { escapeMarkdown } } = require('discord.js');
const { diffWordsWithSpace } = require('diff');

module.exports = class extends Event {

     async run(old, message) {
          if (!message.guild || message.author.bot || old.content === message.content) return;

          const embed = new MauricioEmbed()
               .setColor('LIME')
               .setAuthor(old.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
               .setTitle('Mensagem Atualizada')
               .setDescription([
                    `**❯ Id da mensagem:** ${message.id}`,
                    `**❯ Canal:** ${message.channel}`,
                    `**❯ Author:** ${message.member.displayName}`,
               ])
               .setURL(old.url)
               .splitFields(diffWordsWithSpace(escapeMarkdown(old.content), escapeMarkdown(message.content))
                    .map(result => result.added ? `**${result.value}**` : result.removed ? `~~${result.value}~~` : result.value)
                    .join(' '));

               const channel = message.guild.channels.cache.find(ch => ch.name === 'roger');
               if (channel) channel.send(embed);
     }
}