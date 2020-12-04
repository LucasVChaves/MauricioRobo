const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const subreddits = [
     "Cursed_Images",
     "MakeMeSuffer",
     "NoahGetTheBoat",
     "thanksihateit",
     "awfuleverything",
     "hmmm"
];

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['cursedpic'],
               description: 'Manda uma foto aleatória que causa enorme desconforto. Podem ser engraçadas também.',
               category: "NSFW",
               nsfw: false         
          });
     }

     async run(message) {
          const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
               .then(response => response.json())
               .then(body => body.data);

          const selected = data[Math.floor(Math.random() * data.length)];

          console.log("Cursed command used.");

          return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
     }
}