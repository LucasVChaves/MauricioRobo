const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {sfw} = new (require("nekos.life"))();


module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['lagarto', 'largato'],
            description: 'Manda uma foto de dinossauro pocket edition!!',
            category: "Images"
        });
    }

    async run(message) {
        console.log("Lizard command used.");

        return message.channel.send(
            await sfw.lizard()
            .then(img => new MessageEmbed().setImage(img.url))
        );
    }
}