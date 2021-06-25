module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nisi u voice kanalu!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bot nije u vasem kanalu!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Trenutno se ne reprodukuje muzika!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Samo jedna pesma je ubelezena na queue.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - queue je ipravo uklonjen!`);
    },
};
