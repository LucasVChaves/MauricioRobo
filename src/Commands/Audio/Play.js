const Command = require('../../Structures/Command');
const ytdl = require('ytdl-core');
const {MessageEmbed} = require('discord.js')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['p', 'tocar'],
            description: 'O bot entra no canal de voz e toca música/vídeo.',
            category: "<WIP>",
            usage: "<link>"
        });
    }

    async run(message, args) {
        console.log("Play command used.");

        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send("Você precisa estar num canal de voz, doente!!");
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has("CONNECT")) return message.channel.send("Tenho permissão pra entrar nessa porra não!");
        if(!permissions.has("SPEAK")) return message.channel.send("Tenho permissão pra falar nessa porra não!");

        try {
            var connection = await voiceChannel.join();
        } catch (error) {
            console.log(`Error while trying to play music: ${error}`)
            return message.channel.send("Deu um erro tentando entrar na chamada. Reclama com o lixo do meu dev!");
        }

        const queue = [args[0]];

        const dispatcher = connection.play(ytdl((queue[0])))
            .on("end", () => {
                queue.shift();
                message.channel.send(`Tocando: ${queue[0]}`)
            })
            .on("finish", () => {
                voiceChannel.leave();
                message.channel.send("Acabou, to vazando.");
            })
            .on("error", err => {
                console.log(err);
            });
        
        dispatcher.setVolume(1);
        
    }
}