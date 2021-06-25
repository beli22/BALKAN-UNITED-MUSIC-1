module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nisi u voice kanalu!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bot nije u vasem kanalu!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Trenutno se ne reprodukuje muzika!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Pesma je vec pustena!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Pesma ${client.player.getQueue(message).playing.title} je nastavljena!`);
    },
};
