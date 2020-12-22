const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const {nsfw} = new (require("nekos.life"))();

// neko, kuni, kemonomimi, kitsune, keta, holo, futarani, spank

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['bizarro', 'edu'],
            description: 'Manda uma foto ou gif de umas classes bizarras de hentai.',
            category: "NSFW",
            nsfw: true         
        });
    }

    async run(message) {
        console.log("Bizarre command used.");

        const randInt = Math.floor(Math.random() * (8)) + 1;

        switch (randInt) {
            case 1:
                return message.channel.send(
                    await nsfw.nekoGif()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 2:
                return message.channel.send(
                    await nsfw.kuni()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 3:
                return message.channel.send(
                    await nsfw.kemonomimi()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 4:
                return message.channel.send(
                    await nsfw.kitsune()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 5:
                return message.channel.send(
                    await nsfw.keta()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 6:
                return message.channel.send(
                    await nsfw.holo()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 7:
                return message.channel.send(
                    await nsfw.futanari()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
            case 8:
                return message.channel.send(
                    await nsfw.spank()
                    .then(img => new MessageEmbed().setImage(img.url).setColor("RED").setTitle("🔥Toma ai seu putenheiro🔥"))
                    );
                break;
        }
    }
}