module.exports = async (client) => {
    console.log(`Spreman na ${client.guilds.cache.size} servera, spreman je za ${client.users.cache.size} ljudi`);

    client.user.setActivity(client.config.discord.activity);
};
