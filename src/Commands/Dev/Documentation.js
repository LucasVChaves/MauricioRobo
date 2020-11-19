const Command = require('../../Structures/Command');
const fetch = require('node-fetch');

module.exports = class extends Command {
     constructor(...args) {
          super(...args, {
               aliases: ['docs', 'djs'],
               description: "Procura algo na documentação do Discord.js. *útil pro dev*",
               category: "Dev",
               usage: "<searchQuery>",
               botPerms: ['ADD_REACTIONS', 'MENAGE_MESSAGES'],
               args: true
          });
     }

     async run(message, ...query) {
          const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

          const docFetch = await fetch(url);
          const embed = await docFetch.json();

          if (!embed || embed.error) {
               return message.reply(`"${query}" não foi achado na documentação do Discord.js <https://discord.js.org>`);
          }
          if (!message.guild) {
               return message.channel.send({embed})
          }

          const msg = await message.channel.send({embed});
          msg.react('🗑️');

          let react;
          try {
               react = await msg.awaitReactions(
                    (reaction, user) => reaction.emoji.name === "🗑️" && user.id === message.author.id,
                    {max: 1, time: 10000, errors: ['time']}
               )
          } catch (error) {
               msg.reactions.removeAll();
          }

          if(react && react.first()) msg.delete();

          return message;
     }

};