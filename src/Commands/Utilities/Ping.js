const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
               aliases:['pong'],
               description: 'Mostra seu ping, e o da API do Bot',
               category: 'Utilidades'
          });
	}

	async run(message) {
          const msg = await message.channel.send(`Pingando......`);
          
          const latency = msg.createdTimestamp - message.createdTimestamp;
          const choices = [`Isso é mesmo meu ping?`, `Isso ta ok?`, `Espero que meu ping esteja menor que o pau do Lorenzzo!`, `Pong!`];
          const response = choices[Math.floor(Math.random() * choices.length)];

          msg.edit(`${response} -> Latência do Bot \`${latency}ms\`, Latência da API: \`${Math.round(this.client.ws.ping)}ms\``);

          console.log("Ping command used.");
	}

};