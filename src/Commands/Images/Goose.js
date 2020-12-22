const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['ganso'],
            description: 'Manda uma foto ou gif de ganso.',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Goose command used.");

        return message.channel.send(
            await sfw.goose()
            .then(img => new MessageEmbed().setImage(img.url))
            );
    }
}