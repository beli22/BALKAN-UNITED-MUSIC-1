module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Upravo pusta **${track.title}** u kanalu ${message.member.voice.channel.name} ...`);
};
