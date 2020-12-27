const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['paulo', 'paulao', 'roleta'],
            description: 'Link para download do lindo PauloRoleta.',
            category: "Info",
        });
    }

    async run(message,) {
        console.log("Pauloroleta command used.");

        const embed = new MessageEmbed()
            .setColor("NAVY")
            .setTitle("O link para download do paulão é esse: ")
            .setDescription("Link: *https://mega.nz/file/EXoQgLCb#T0wGYrgYHMkzdKJXbGRKh1dJS_diz851pkuvBWl6VU0*")
            .setFooter("Github -> https://github.com/LucasVChaves/PauloRoleta");

        return message.channel.send(embed);
    }
}