const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['cafune', 'carinho'],
            description: 'Faz um cafuné na pessoa marcada.',
            category: "Interactions",
            usage: "<user>",
            args: true
        });
    }

    async run(message,) {
        console.log("Cuddle command used.");

        const member = message.mentions.members.last();

        if(member.id === message.author.id) return message.channel.send(`Nossa ${message.author.username} cafuné sozinho? Que merda kkkkkkkk.`);

        return message.channel.send(
            await sfw.cuddle()
            .then(img => new MessageEmbed()
                .setImage(img.url)
                .setColor("GREYPLE")
                .setTitle(`${message.author.username} ta fazendo carinho em ${member.user.username}`))
        );
    }
}