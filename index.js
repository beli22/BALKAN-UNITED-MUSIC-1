const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./komande').forEach(dirs => {
    const commands = fs.readdirSync(`./komande/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./komande/${dirs}/${file}`);
        console.log(`Ucitavanje komande ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./kontrole').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Ucitavanje discord.js eventa ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
    setInterval(() => {
    const statusi = [
      `Balkan United® | v1.2.2`,
      `Balkan United® | Developer Jovic_04_`
    ];
    const index = Math.floor(Math.random() * statusi.length);
    client.user.setActivity(statusi[index], { type: "PLAYING" });
  }, 5000);
};

for (const file of player) {
    console.log(`Ucitavanje discord-player eventa ${file}`);
    const event = require(`./kontrole/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);
