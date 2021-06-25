module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} je dodata u queue listu (**${playlist.tracks.length}** Pesama) !`);
};
