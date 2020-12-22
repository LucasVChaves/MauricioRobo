const Command = require("../../Structures/Command");

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ["dado", "dice", "rolar"],
            description: "Roda um dado baseado no número que você escolher.",
            category: "Fun",
            usage: ">roll <número>",
            args: true
        });
    }

    async run(message, args){
        console.log("Roll command used.");

        const number = args;

        if(isNaN(number)) return message.channel.send("O dado tem números, não letras seu idiota!");

        const diceRoll = Math.floor(Math.random() * (number)) + 1;

        return message.channel.send(`Seu dado rolou ${diceRoll}! 🎲 🍀`);
    }
};