const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['foot', 'pe', 'thales'],
            description: 'Manda uma foto ou gif com pés. (presente pra vc sabe quem!!)',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Feet command used.");

        return message.channel.send(
            await nsfw.feetGif()
            .then(img => new MessageEmbed().setImage(img.url))
            );
    }
}