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
     
          const randInt = Math.floor(Math.random() * (2)) + 1;

          if(randInt == 1){  
               return message.channel.send(
                    await nsfw.classic()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
               );
          }
          if(randInt == 2){  
               return message.channel.send(
                    await nsfw.gasm()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
               );
          }
     }
}