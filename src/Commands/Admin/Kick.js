const Command = require('../../Structures/Command');

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['expulsar'],
               description: 'Expulsa alguém do servidor.',
               category: "Admin",
               args: true,
               usage: "<@user>"
          });
     }

     async run(message, ...target) {
          console.log("Kick command used.");

          const member = message.mentions.members.last() || message.guild.members.cache.get(target);

          if(message.member.hasPermission("ADMINISTRATOR")){
               member.kick();
               return message.channel.send(`O ${member} foi expulso do servidor. Quem mandou ser babaca?!`);
          }

          return message.channel.send("Você não tem permissão para isso.");
     }
}