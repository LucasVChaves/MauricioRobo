const { Client } = require('discord.js');

module.exports = class MauricioClient extends Client {

     constructor(options = {}) {
          super({
               disableMentions: "everyone"
          });
          this.validate(options);

          this.once('ready', () => {
               console.log(`Logged in as ${this.user.username}`)
          });

          this.on('message', async (message) => {
               const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
               const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

               if (!message.guild || message.author.bot) return;

               if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is ${this.prefix}.`);

               const prefix = message.content.match(mentionRegexPrefix) ? message.content.match(mentionRegexPrefix)[0] : this.prefix;

               const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

               if(cmd.toLowerCase() === "whoami"){
                    message.channel.send(`Eu sou o Mauricio! Que come seu cu desde o início kkkkkk KEKW !`);
               }
          })
     }

     validate(options) {
          if (typeof options !== 'object') throw new TypeError('Options shoud be a type of Object.');

          if (!options.token) throw new Error("You must pass the API Token");
          this.token = options.token;

          if (!options.prefix) throw new Error("You must pass a prefix");
          if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be of type String');
          this.prefix = options.prefix
     }

     async login(token = this.token) {
          super.login(token)
     }
}