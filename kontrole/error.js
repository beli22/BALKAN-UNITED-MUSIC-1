module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Muzika se ne reprodukuje ni u jednom kanalu!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Nisi ni u jednom voice kanalu!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nemam permisiju da udjem u ovaj kanal!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Nesto nije uredu... Error: ${error}`);
    };
};
