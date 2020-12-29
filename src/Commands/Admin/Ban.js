const Command = require('../../Structures/Command');

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['banir'],
               description: 'Bane alguém do servidor.',
               category: "Admin",
               args: true,
               usage: "<@user>"
          });
     }

     async run(message, ...target) {
          console.log("Ban command used.");

          const member = message.mentions.members.last() || message.guild.members.cache.get(target);

          if(message.member.hasPermission("ADMINISTRATOR")){
               member.ban();
               return message.channel.send(`O ${member} foi banido do servidor. KKKKKK se fodeu!`);
          }

          return message.channel.send("Você não tem permissão para isso.");
     }
}