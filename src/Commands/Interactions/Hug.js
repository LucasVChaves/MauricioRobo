const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['abraco', 'abraço'],
            description: 'Abraça quem for marcado.',
            category: "Interactions",
            usage: "<user>",
            args: true
        });
    }

    async run(message, [target]) {
        console.log("Hug command used.");

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

        if(member.id === message.author.id) return message.channel.send(`Nossa ${message.author.username}, se abraçando? Que triste kkkkkkkk.`);

        return message.channel.send(
            await sfw.hug()
            .then(img => new MessageEmbed()
                .setImage(img.url)
                .setColor("LUMINOUS_VIVID_PINK")
                .setTitle(`${message.author.username} deu um abraço bem delicinha em ${member.user.username}`))
        );
    }
}