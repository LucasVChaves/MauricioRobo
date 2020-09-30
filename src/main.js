const BotClient = require("./Structures/MauricioClient");
const config = require("../config.json");

const client = new BotClient(config)

client.login();