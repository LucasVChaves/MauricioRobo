const Command = require('../../Structures/Command');

const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ['asciificar'],
               description: 'Transforma uma imagem em uma asciiart ("braille").',
               category: 'Fun',
               usage: '<imagem>'
          });
     }

     async run(message) {

          console.log("Asciify command used.");

          const image = message.attachments.first() || message.mentions.members.last().user.displayAvatarURL() || message.member.user.displayAvatarURL();

          message.channel.send(image);

          const embed = new MessageEmbed().setColor("PINK")
     }     
}