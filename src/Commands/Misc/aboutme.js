const Command = require('../../Structures/Command.js');

module.exports = class extends Command {
     constructor(...args) {
          super(...args, { 
               aliases: ['sobre'],
               description: "Revela quem realmente é MauricioRobô",
               category: "Misc"
          });
     }

     async run(message, args) {
          message.channel.send(`Eu sou o Mauricio! Que come seu cu desde o início kkkkkk KEKW !`);    

          console.log("About command used.");
     }
}