module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nisi u voice kanalu!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bot nije u vasem kanalu!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Trenutno se ne reprodukuje muzika!`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} - Trenutna pesma je vec bila **preskocena** !`);
    },
};
