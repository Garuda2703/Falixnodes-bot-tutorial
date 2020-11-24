const { Client, Collection, MessageEmbed, Presence } = require('discord.js');

module.exports.config = {
    name: "ping",
    aliases: ["latency"]
}

module.exports.run = async (client, message, args) => {
    message.channel.send(`my ping is ${client.ws.ping}ms!`)
}