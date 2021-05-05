const DiscordRPC = require('discord-rpc'); 
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            buttons: [{ label: "Dyno is the best", url: "https://dyno.gg" }, { label: "Join their Server", url: "https://discord.com/dyno"}],
            details: "I just love dyno",
            largeImageKey: "rpc_icon",
            startTimestamp,
            largeImageText: "This text is shown when hovering over the largeImageKey in Discord.",
            smallImageKey: 'snek_small',
            smallImageText: 'i am my own pillows',
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.ID }).catch(console.error); // Logging into our application.
})();