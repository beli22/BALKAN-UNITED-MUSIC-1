module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Izbacen sam iz poziva.`);
};
