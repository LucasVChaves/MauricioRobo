const Command = require('../../Structures/Command.js');

module.exports = class extends Command {
     constructor(...args) {
          super(...args, { name: "aboutme",aliases: ['sobre'], })
     }

     async run(message, args) {
          message.channel.send(`Eu sou o Mauricio! Que come seu cu desde o início kkkkkk KEKW !`);
     }
}