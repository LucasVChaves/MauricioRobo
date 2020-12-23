const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['beijo', 'bejoca'],
            description: 'Manda um beijo pra quem for marcado.',
            category: "Interactions",
            usage: "<user>",
            args: true
        });
    }

    async run(message,) {
        console.log("Kiss command used.");

        const member = message.mentions.members.last();

        if(member.id === message.author.id) return message.channel.send(`Nossa ${message.author.username}, se beijando? Que triste kkkkkkkk.`);

        return message.channel.send(
            await sfw.kiss()
            .then(img => new MessageEmbed()
                .setImage(img.url)
                .setColor("DARK_VIVID_PINK")
                .setTitle(`${message.author.username} deu uma beijoca em ${member.user.username}`))
        );
    }
}