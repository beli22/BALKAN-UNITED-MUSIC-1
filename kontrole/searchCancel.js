module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Ukucali ste pogresan odgovor... Posaljite opet komandu!`);
};
