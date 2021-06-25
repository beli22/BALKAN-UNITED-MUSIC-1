module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nema rezultata o ovoj pesmi na YouTube ${query}!`);
};
