const Command = require('../../Structures/Command');

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ['cancel', 'jantar'],
               description: 'Cancela quem for marcado por um motivo aleatório.',
               category: 'Fun',
               usage: '<@alvo>',
               args: true
          });
     }

     async run(message, [target]) {
          console.log("Cancelar command used");

          const answersList = [
               `foi cancelada(o) porque comeu a comida do ralo da pia! Nojenta(o) do caralho! 🤮`,
               `foi cancelado(a) por usar hack num speedrun de Minecraft. ⛏️`,
               `foi cancelada(o) por processar o McDonalds porque continuou triste mesmo comprando um McLanche Feliz. 🍔`,
               `foi cancelado(a) por ter um micropênis e expor ele num raio de 50 metros de uma escola maternal. 🤏📏`,
               `foi cancelada(o) porque fã do Tio Orochi. ♍`,
               `foi cancelado(a) por mandar nude para a vó e mostrar o pirocóptero pra mãe. 🚁`,
               `foi cancelada(o) por ter um rabão estupendo! 🍑`,
               `foi cancelado(a) porque cagou na água da Praia do Forte na frente de 2 parentes nas férias de fim de ano de 2014. 💩`,
               `foi cancelada(o) por jogar Free Fire e não ser corna(o). 🐮`,
               `foi cancelado(a) por torcer pro Tupi. 🐓`,
               `foi cancelada(o) porque a unha do dedão do pé esquerdo tem uma cor esquisita. 🦶`,
               `foi cancelado(a) porque tem trés mamilos. 🎯`,
               `foi cancelada(o) por ouvir Matuê. 👹`,
               `foi cancelado(a) por ser flagrado fazendo asfixía auto-erótica no banheiro da rodoviária de JF! 🚌`,
               `foi cancelada(o) porque só enxe o saco o dia todo! 😡`,
               `foi cancelado(a) porque desrespeitou The Midnight Gospel. 🎤`,
               `foi cancelada(o) por falar que comida japonesa é ruim. 🍣`,
               `foi cancelado(a) porque riu de basquete de anão na frente dos atletas. ⛹️‍♂️`,
               `foi cancelada(o) porque é linda(o) de mais pra esse servidor! 💅`,
               `foi cancelado(a) porque não pagou o agiota. 🕵️‍♂️`,
               `foi cancelada(o) por ser anti-legalize. 🍁🚬`
               `foi cancelado(a) por não gostar de RGB nas coisas! 🏳️‍🌈`
          ];
          const answerNum = Math.floor(Math.random() * answersList.length);
          const member = message.mentions.members.last() || message.guild.members.cache.get(target);

          if(member.id === "338824400847503361"){
               return message.channel.send("Lorenzzin foi cancelado por ser ele mesmo!! 👉💦👌")
               .then(message.channel.send("Jantado kkkkkk!🤣🤣"));
          }else if(member.id === message.author.id){
               return message.channel.send("Auto-cancelamento? Vai se foder vai!");
          }else{
               return message.channel.send(`${member.user.username} ${answersList[answerNum]}`)
               .then(message.channel.send("Foi jantado(a) migas!! 🤣🤣🤣🔝🔝"));      
          }
     }
};
