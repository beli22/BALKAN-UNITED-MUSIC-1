module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzika je ugasena zato sto nema nikoga u voice kanalu!`);
};
