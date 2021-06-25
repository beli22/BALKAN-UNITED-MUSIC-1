module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Izbor je **otkazan** !`);
    } else message.channel.send(`${client.emotes.error} - Morate poslati validan broj izmedju **1** i **${tracks.length}** !`);
};
