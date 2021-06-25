module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nisi u voice kanalu!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bot nije u vasem kanalu!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Trenutno se ne reprodukuje muzika!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Muzika je vec stopirana!`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Pesma ${client.player.getQueue(message).playing.title} je stopirana!`);
    },
};
