const Command = require('../../Structures/Command');

module.exports = class extends Command{

     constructor(...args){
          super(...args, {
               aliases: ["ld"],
               description: "Coloca o servidor em lockdown, trancando todos os canais de voz e texto. (CUIDADO!!)",
               category: 'Utilidade',
               args: true,
               ownerOnly: true
          });
     }

     async run(message, args){

          console.log("Lockdown command used.");

     }

}