const Command = require('../../Structures/Command');
const {exec} = require('child_process');

module.exports = class extends Command{
     constructor(...args){
          super(...args, {
               aliases: ['exec'],
               description: "Executa um comando no console. *útil pro dev*",
               category: "Dev",
               usage: "<seachQuery>",
               args: true
          });
     }

     async run(message, ...args){
          exec(args.join(" "), (error, stdout) => {
               const response = stdout || error;
               message.channel.send(response, {split: true, code: true});
          });
     }

};