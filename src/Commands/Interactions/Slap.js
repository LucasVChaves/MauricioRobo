const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['tapa', 'tabefe'],
            description: 'Da um tapa em quem foi marcado.',
            category: "Interactions",
            usage: "<user>",
            args: true
        });
    }

    async run(message,) {
        console.log("Slap command used.");

        const member = message.mentions.members.last();

        if(member.id === message.author.id) return message.channel.send(`Nossa ${message.author.username}, se batendo? Que bom! Você merece seu fodido!!.`);

        return message.channel.send(
            await sfw.slap()
            .then(img => new MessageEmbed()
                .setImage(img.url)
                .setColor("RED")
                .setTitle(`${message.author.username} deu uma bujarda na cara de ${member.user.username}`))
        );
    }
}