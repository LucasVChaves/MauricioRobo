const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['ass', 'bunda'],
            description: 'Manda uma foto ou gif de anal.',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Anal command used.");

        return message.channel.send(
            await nsfw.anal()
            .then(img => new MessageEmbed().setImage(img.url))
            );
    }
}