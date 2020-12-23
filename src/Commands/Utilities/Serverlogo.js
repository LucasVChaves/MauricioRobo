const Command = require('../../Structures/Command');
const {MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['slogo'],
            description: 'Pega a logo do servidor.',
            category: "Audio"        
        });
    }

    async run(message) {
        console.log("ServerLogo command used.");

        const image = message.guild.iconURL({size: 512});

        const embed = new MessageEmbed().setColor("GREEN").setImage(image);

        return message.channel.send(embed);
    }
}