const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['entrar'],
            description: 'O bot entra no canal de voz.',
            category: "Audio"        
        });
    }

    async run(message) {
        console.log("Join command used.");

        if (!message.member.voice.channel) return message.channel.send("Você tem que estar num canal, acéfalo!");

        await message.member.voice.channel.join();

        return message.channel.send("To dentro putas.");
    }
}