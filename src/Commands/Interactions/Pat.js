const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['headpat', 'tapinha'],
               description: 'Carinho da cabeça de quem foi marcado.',
               category: "Interactions",
               usage: "<user>",
               args: true
          });
     }

     async run(message,) {
          console.log("Pat command used.");

          const member = message.mentions.members.last();

          if(member.id === message.author.id) return message.channel.send(`Nossa ${message.author.username} carinho na própria cabeça? Que sad.`);

          return message.channel.send(
               await sfw.pat()
               .then(img => new MessageEmbed()
                    .setImage(img.url)
                    .setColor("DARK_VIVID_PINK")
                    .setTitle(`${message.author.username} ta dando headpats na(o) ${member.user.username}! Que fofo!!`))
          );
     }
}