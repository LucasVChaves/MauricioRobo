const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const subreddits = [
     'memes',
     'DeepFriedMemes',
     'dankmemes',
     'bonehurtingjuice',
     'surrealmemes',
     'me_irl',
     'lotrmemes',
     'cursedcomments',
     'wholesomememes',
     'SpeedOfLobsters'
];

module.exports = class extends Command {

     constructor(...args){
          super(...args, {
               aliases: ['memes', 'mene'],
               description: 'Manda um meme tirado direto do Reddit!!',
               category: "Images"
          });
     }

     async run(message) {
          const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
               .then(response => response.json())
               .then(body => body.data);

          const selected = data[Math.floor(Math.random() * data.length)];

          console.log("Meme command used.");

          return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
     }
}