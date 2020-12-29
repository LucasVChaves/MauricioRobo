const Command = require('../../Structures/Command');
const {MessageEmbed} = require("discord.js");

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['limpar'],
               description: 'Limpa a quantidade dada de mensagens.',
               category: "Admin",
               args: true,
               usage: "<number>"
          });
     }

     async run(message, ...args) {
          console.log("Clear command used.");

          let deleteAmount;


          if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não tem permissão pra essa porra.");
          if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Só pode número, e maior que 0! Tu é idiota ou que?') }
          if (parseInt(args[0]) > 50) {
               return message.reply('O Máximo é 50. Porque você quer apagar tanta mensagem? Fizeram GF no chat??')
          } else {
               deleteAmount = parseInt(args[0]);
          }

          message.channel.bulkDelete(deleteAmount + 1, true);

          const embed = new MessageEmbed()
               .setColor("#990000")
               .setTitle(`${deleteAmount} mensagens foram apagadas!`)
               .setDescription(`Deletado por ${message.author.username}#${message.author.discriminator}`);
          
          return message.channel.send(embed)
               .then(msg => msg.delete({timeout: 7500}));
     }
}