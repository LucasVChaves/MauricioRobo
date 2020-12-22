const Command = require('../../Structures/Command');
const figlet = require('util').promisify(require('figlet'));

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               description: 'Transforma o texto enviado em um banner ascii',
               category: 'Fun',
               usage: '<texto>'
          });
     }

     async run(msg, ...banner) {

          console.log("Banner command used.");

          return msg.channel.send(await figlet(banner), { code: true });
     }
};
