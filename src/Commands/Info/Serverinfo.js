const Command = require('../../Structures/Command.js');
const moment = require('moment');
const { MessageEmbed } = require('discord.js');

const filterLevels = {
     DISABLED: 'Off',
     MEMBERS_WITHOUT_ROLES: 'No Role',
     ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
     NONE: 'None',
     LOW: 'Low',
     MEDIUM: 'Medium',
     HIGH: '(╯°□°）╯︵ ┻━┻',
     VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const regions = {
     brazil: 'Brazil',
     europe: 'Europe',
     hongkong: 'Hong Kong',
     india: 'India',
     japan: 'Japan',
     russia: 'Russia',
     singapore: 'Singapore',
     southafrica: 'South Africa',
     sydney: 'Sydney',
     'us-central': 'US Central',
     'us-east': 'US East',
     'us-west': 'US West',
     'us-south': 'US South'
};

module.exports = class extends Command {

     constructor(...args) {
          super(...args, { 
               aliases: ['sinfo', 'guildinfo', 'ginfo'],
               description: "Mostra as informações do servidor onde a mensagem foi mandada.",
               category: "Info"
          });
     }

     async run(message) {
          const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
          const members = message.guild.members.cache;
          const channels = message.guild.channels.cache;
          const emojis = message.guild.emojis.cache;

          const embed = new MessageEmbed()
               .setDescription(`**Informações do servidor __${message.guild.name}__**`)
               .setColor('PURPLE')
               .setThumbnail(message.guild.iconURL({ dynamic: true }))
               .addField('Geral', [
                    `**❯ Nome:** ${message.guild.name}`,
                    `**❯ ID:** ${message.guild.id}`,
                    `**❯ Dono:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
                    `**❯ Região:** ${regions[message.guild.region]}`,
                    `**❯ Tier do boost:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'Sem boost.'}`,
                    `**❯ Filtro de Safadeza:** ${filterLevels[message.guild.explicitContentFilter]}`,
                    `**❯ Nível de Verificação:** ${verificationLevels[message.guild.verificationLevels]}`,
                    `**❯ Tempo de Criação:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format("LL")} ${moment(message.guild).fromNow()}`,
                    '\u200b'
               ])
               .addField('Estatísticas', [
                    `**❯ Cargos:** ${roles.length}`,
                    `**❯ Emojis:** ${emojis.size}`,
                    `**❯ Membros:** ${message.guild.memberCount}`,
                    `**❯ Humanos:** ${members.filter(member => !member.user.bot).size}`,
                    `**❯ Bots:** ${members.filter(member => member.user.bot).size}`,
                    `**❯ Canais de Texto:** ${channels.filter(channel => channel.type === 'text').size}`,
                    `**❯ Canais de Voz:** ${channels.filter(channel => channel.type === 'voice').size}`,
                    `**❯ Boosts:** ${message.guild.premiumSubscriptionCount || '0'}`,
                    '\u200b'
               ])
               .addField('Presença', [
                    `**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                    `**❯ Atoa:** ${members.filter(member => member.presence.status === 'idle').size}`,
                    `**❯ Não perturbe:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                    `**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
                    '\u200b'
               ])
               .addField(`Cargos [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Nenhum')
               .setTimestamp();
          
               message.channel.send(embed);

               console.log("Serverinfo command used.");
     }
};