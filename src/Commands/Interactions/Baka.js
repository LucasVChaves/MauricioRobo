const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['idiota', 'boboca'],
            description: 'Mostra pra pessoa marcada que ela é idiota.',
            category: "Interactions",
            usage: "<user>",
            args: true
        });
    }

    async run(message,) {
        console.log("Baka command used.");

        const member = message.mentions.members.last();

        if(member.id === message.author.id) return message.channel.send(`Sim ${message.author.username} você é um otário mesmo!`);

        return message.channel.send(
            await sfw.baka()
            .then(img => new MessageEmbed()
                .setImage(img.url)
                .setColor("DARK_RED")
                .setTitle(`${message.author.username} chamou ${member.user.username} de idiota! Porraaaan!`))
        );
    }
}