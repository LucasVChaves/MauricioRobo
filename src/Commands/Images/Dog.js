const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();


module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['cachorro', 'doguinho'],
               description: 'Manda uma foto de doguinho!!',
               category: "Images"
          });
     }

     async run(message) {
          console.log("Dog command used.");

          return message.channel.send(
               await sfw.woof()
               .then(img => new MessageEmbed().setImage(img.url))
          );
     }
}