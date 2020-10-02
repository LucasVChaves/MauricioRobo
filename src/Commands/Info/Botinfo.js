const os = require('os');
const ms = require('ms')
const Command = require('../../Structures/Command');
const {utc} = require('moment');
const {version} = require('../../../package.json');
const {runInNewContext} = require('vm');
const {MessageEmbed, version: djsversion} = require('discord.js');

module.exports = class extends Command{

     constructor(...args){
          super(...args, {
               aliases: ['info', 'binfo', 'mauricio'],
               description: "Mostra as informações do Mauricio.",
               category: "Info"
          });
     }

     run(message){
          const core = os.cpus()[0];
          const embed = new MessageEmbed()
               .setThumbnail(this.client.user.displayAvatarURL())
               .setColor(message.guild.me.displayHexColor || "GREEN")
               .addField('Geral', [
                    `**❯ Client:** ${this.client.user.tag} (${this.client.user.id})`,
                    `**❯ Comandos:** ${this.client.commands.size}`,
                    `**❯ Servidores:** ${this.client.guilds.cache.size.toLocaleString()}`,
                    `**❯ Usuários:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                    `**❯ Canais:** ${this.client.channels.cache.size.toLocaleString()}`,
                    `**❯ Data de criação:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                    '\u200b'
               ])
               .addField('Versões', [
                    `**❯ Versão Bot:** ${process.version}`,
                    `**❯ Node.js:** v${version}`,
                    `**❯ Discord.js:** v${djsversion}`,
                    '\u200b'
               ])
               .addField('Sistema', [
                    `**❯ Plataforma:** ${process.platform}`,
                    `**❯ Uptime:** ${ms(os.uptime() * 1000, {long: true})}`,
                    `**❯ CPU:** `,
                    `\u3000 Núcleos: ${os.cpus().length}`,
                    `\u3000 Modelo: ${core.model}`,
                    `\u3000 Velocidade: ${core.speed}MHz`,
                    `**❯ Memória:** `,
                    `\u3000 Total: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`,
                    `\u3000 Usada: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`
               ])
               .setTimestamp();

          message.channel.send(embed);
     }

};