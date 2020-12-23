const { VoiceState, VoiceChannel } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['sai', 'vaza'],
            description: 'O bot sai do canal de voz.',
            category: "Audio"        
        });
    }

    async run(message) {
        console.log("Leave command used.");

        await message.member.voice.channel.leave();

        return message.channel.send("To fora putas.");
    }
}