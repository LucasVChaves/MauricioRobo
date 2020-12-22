const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['armadilha'],
            description: 'Manda uma foto ou gif de trap.',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Trap command used.");

        return message.channel.send(
            await nsfw.trap()
            .then(img => new MessageEmbed().setImage(img.url))
            );
    }
}