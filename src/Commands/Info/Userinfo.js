const Command = require('../../Structures/Command');
const moment = require('moment');
const { MessageEmbed } = require("discord.js");

const flags = {
     DISCORD_EMPLOYEE: 'Discord Employee',
     DISCORD_PARTNER: 'Discord Partner',
     BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
     BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
     HYPESQUAD_EVENTS: 'HypeSquad Events',
     HOUSE_BRAVERY: 'House of Bravery',
     HOUSE_BRILLIANCE: 'House of Brilliance',
     HOUSE_BALANCE: 'House of Balance',
     EARLY_SUPPORTER: 'Early Supporter',
     TEAM_USER: 'Team User',
     SYSTEM: 'System',
     VERIFIED_BOT: 'Verified Bot',
     VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ["uinfo", "memberinfo", "minfo"],
               description: "Mostra as informações do membro marcado na mensagem.",
               category: "Info",
               usage: '[membro]'
          });
     }

     async run(message, [target]) {
          const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
          const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);
          const userFlags = member.user.flags.toArray();
          const embed = new MessageEmbed()
               .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
               .setColor(member.displayHexColor || 'BLUE')
               .addField('Usuário', [
                    `**❯ Nome:** ${member.user.username}`,
                    `**❯ Discriminador:** ${member.user.discriminator}`,
                    `**❯ ID:** ${member.id}`,
                    `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Nenhum'}`,
                    `**❯ Avatar:** [Link to Avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                    `**❯ Data de criação:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format("LL")} ${moment(member.user.createdTimestamp).fromNow()}`,
                    `**❯ Status:** ${member.user.presence.status}`,
                    `**❯ Game:** ${member.user.presence.game || 'Não está jogando'}`,
                    '\u200b'
               ])
               .addField('Membro', [
                    `**❯ Cargo mais alto:** ${member.roles.highest.id === message.guild.id ? 'Nenhum' : member.roles.highest.name}`,
                    `**❯ Data de entrada no server:** ${moment(member.joinedAt).format('LL LTS')}`,
                    `**❯ Cargo Principal:** ${member.roles.hoist ? member.roles.hoist.name : 'Nenhum'}`,
                    `**❯ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Nenhum'}`,
                    '\u200b'
               ])

          return message.channel.send(embed);
     }

};