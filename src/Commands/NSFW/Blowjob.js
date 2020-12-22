const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['bj', 'boquete'],
            description: 'Manda uma foto ou gif de um boquetão.',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Blowjob command used.");

        return message.channel.send(
            await nsfw.bJ()
            .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
            );
    }
}