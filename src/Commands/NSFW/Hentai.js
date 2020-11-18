const Command = require('../../Structures/Command');
const superagent = require('superagent');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['hpics', 'pornh'],
               description: 'Manda um hentai aleatório.',
               category: "NSFW",
               nsfw: true         
          });
     }

     async run(message) {
          
          img = superagent.get('https://nekobot.xyz/api/image').query({type: 'hentai_anal'});

          return message.channel.send(new MessageEmbed());

     }
}