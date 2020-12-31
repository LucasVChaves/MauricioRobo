const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['comer', 'foder'],
               description: 'Tem relações não cristãs com quem foi marcado',
               category: "NSFW",
               nsfw: true         
          });
     }

     async run(message, [target]) {
          console.log("Fuck command used.");

          const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

          if(member.id === message.author.id) return message.channel.send(`${message.author.username}, se comer não existe! Isso é punheta!!`);

          const randInt = Math.floor(Math.random() * (5)) + 1;

          switch (randInt) {
               case 1:
                    return message.channel.send(await nsfw.randomHentaiGif()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle(`🔥 ${message.author.username} comeu ${member.user.username}! Usa camisinha porra!!🔥`))); 
                    break;
               case 2:
                    return message.channel.send(await nsfw.spank()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle(`🔥 ${message.author.username} comeu ${member.user.username}! Usa camisinha porra!!🔥`)));
                    break;
               case 2:
                    return message.channel.send(await nsfw.pussyArt()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle(`🔥 ${message.author.username} comeu ${member.user.username}! Usa camisinha porra!!🔥`)));
                    break;
               case 3:
                    return message.channel.send(await nsfw.anal()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle(`🔥 ${message.author.username} comeu ${member.user.username}! Usa camisinha porra!!🔥`)));
                    break;
               case 4:
                    return message.channel.send(await nsfw.blowJob()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle(`🔥 ${message.author.username} comeu ${member.user.username}! Usa camisinha porra!!🔥`)));
                    break;
               case 5:
                    return message.channel.send(await nsfw.classic()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle(`🔥 ${message.author.username} comeu ${member.user.username}! Usa camisinha porra!!🔥`)));
                    break;
          }
     }
}