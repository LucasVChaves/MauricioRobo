const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['hentai', 'porn'],
               description: 'Manda uma foto ou gif NSFW aleatório.',
               category: "NSFW",
               nsfw: true         
          });
     }

     async run(message) {
          console.log("Pornpic command used.");
     
          return message.channel.send(
               await nsfw.classic()
               .then(img => new MessageEmbed().setImage(img.url))
               );
     }
}