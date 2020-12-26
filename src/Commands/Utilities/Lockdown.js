const Command = require('../../Structures/Command');

const ignoredChannels = new Set([
     "752729044931575959"
]);
const validateFlag = f => f === 'true' || f === 'false' || f === 'null';

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ["ld"],
               description: "Coloca o servidor em lockdown, trancando todos os canais de voz e texto. (CUIDADO!!)",
               category: '<WIP>',
               usage: "<ROLE_ID> TRUE || FALSE || NULL",
               args: true,
               ownerOnly: false
          });
     }

     async run(message, args) {
          console.log("Lockdown command used.");
     }
}