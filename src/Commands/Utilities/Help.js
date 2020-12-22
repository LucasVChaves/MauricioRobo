const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ['ajuda'],
               description: 'Te ajuda explicando um comando citado. Se você ta vendo isso já sabe porque funciona né idiota!',
               category: 'Utilidades',
               usage: '[command]'
          });
     }

     async run(message, [command]) {
          console.log("Help command used.");

          const embed = new MessageEmbed()
               .setColor('LIME')
               .setAuthor(`Menu de ajuda do ${message.guild.name}.`,message.guild.iconURL({ dynamic: true }))
               .setThumbnail(this.client.user.displayAvatarURL())
               .setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
               .setTimestamp();
          
          if(command){
               const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

               if(!cmd) message.channel.send(`O comando não \`${command}\` foi reconhecido. Tente outro!`);

               embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Comando de Ajuda`, this.client.user.displayAvatarURL());
               embed.setDescription([
                    `**❯ Apelidos:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : "Sem apelidos"}`,
                    `**❯ Descrição:** ${cmd.description}`,
                    `**❯ Categoria:** ${cmd.category}`,
                    `**❯ Uso:** ${cmd.usage}`,
               ]);

               return message.channel.send(embed);
          }else{
               embed.setDescription([               
                    `O prefíxo é: ${this.client.prefix}`,
                    `Parâmetros: \`<>\` é obrigatório, \`[]\` é opcional.`,
                    `Esses comandos são disponíveis no ${message.guild.name}`,
                    `*Nota: Alguns comandos Image ou NSFW podem não funcionar devido à API do reddit (de onde as imagens são tiradas), não posso fazer nada a respeito disso.*`
               ]);
               let categories;
               if(!this.client.owners.includes(message.author.id)){
                    categories = this.client.util.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
               }else{
                    categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category))
               }

               for(const category of categories){
                    embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd => cmd.category === category).map(cmd => 
                         `\`${cmd.name}\``).join(' '));
               }
               return message.channel.send(embed);
          }                      
     }
}