module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzika je zaustavljena zato sto nema vise pesama u queue listi!`);
};
