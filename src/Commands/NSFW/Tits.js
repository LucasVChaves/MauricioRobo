const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['tit', 'tetas', 'peitos'],
            description: 'Manda uma foto ou gif de peitos.',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Tits command used.");

        return message.channel.send(
            await nsfw.boobs()
            .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
            );
    }
}