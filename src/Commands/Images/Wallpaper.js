const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['background', 'wllpr'],
            description: 'Manda um wallpaper delicia pro seu pc.',
            category: "Images"
        });
    }

    async run(message) {
        console.log("Wallpaper command used.");

        return message.channel.send(
            await sfw.wallpaper()
            .then(img => new MessageEmbed().setImage(img.url).setColor("RANDOM"))
            );
    }
}