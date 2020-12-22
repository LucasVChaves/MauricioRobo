const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['gato', 'miau'],
               description: 'Manda uma foto de gatinho!!',
               category: "Images"
          });
     }

     async run(message) {
          console.log("Cat command used.");

          return message.channel.send(
               await sfw.meow()
               .then(img => new MessageEmbed().setImage(img.url))
          );
     }
}