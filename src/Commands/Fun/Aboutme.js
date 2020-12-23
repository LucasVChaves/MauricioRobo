const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
     constructor(...args) {
          super(...args, { 
               aliases: ['sobre'],
               description: "Revela quem realmente é MauricioRobô",
               category: "Fun"
          });
     }

     async run(message) {
          console.log("About command used.");

          const embed = new MessageEmbed()
               .setTitle(`Eu sou o Mauricio! Que come seu cu desde o início kkkkkk KEKW !`)
               .setColor("BLUE")
               .setThumbnail(this.client.user.displayAvatarURL())
               .addField("Sobre mim:", [
                    `**❯ Criador:** Fui criado pelo lindo, perfeito, pauzudo e gênio da CS **f(x)et#3766**`,
                    `**❯ Fatos: ** Sou de *Touros*, ascendente em *Capricórnio* e com Lua em *Peixes*. Meu pênis tem 137 mm de comprimento e 26 mm de diâmetro. Gosto de Friends, Grey's Anatomy, Blackpink e Narguile. Me identifico como *Maverick* e sou vegano.`,
                    `**❯ Código Fonte **: Você pode achar meu código fonte no github https://github.com/LucasVChaves/MauricioRobo`
               ])
               .addField("Mais:", [
                    `**>Quero um comando custom: ** Só ganha se der 5 reais (**OU MAIS**) para o dev.`,
                    `**>Evento HACKER-GAMER: ** Quem achar um easter egg no meu sourcecode ganha 10 reais.`
               ])
               .setFooter("Não é garantido que você vai ganhar o prêmio! *(dev é pobre)*");

          message.channel.send(embed);    
     }
}