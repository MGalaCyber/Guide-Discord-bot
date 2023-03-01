/******************************************************************************************| INFORMATION |******************************************************************************************
 * @INFO :
 * 1.0 Import the required modules.
    * 1.1 Validating script for the advertisement.                                                  //////////////////////////////////////////////////////////////////////////////////////////////
 * 2.0 Create the Discord bot Client.                                                               ////                                                                                      ////
 * 3.0 Create the commands for the bot.                                                             \\\\                                        @NOTICE                                       \\\\
 * 4.0 Create/Custom the events for the bot.                                                        ////    This source code is public, it is forbidden to sell and buy this handler code     ////
 * 5.0 Create the functions for the bot.                                                            \\\\       if you want to use this handler code, please give credit from the owner        \\\\
 * 6.0 Create/Custom the variables for the bot.                                                     ////    it is forbidden to change the contents of the code (especially the core code)     ////
 *                                                                                                  \\\\                  it is forbidden to delete the credit in the code!                   \\\\
 *                                                                                                  ////                                                                                      ////
 * @CREDITS : MGalaCyber Development                                                                //////////////////////////////////////////////////////////////////////////////////////////////
 * @VERSION : 1.0.0
 * @GITHUB : MGalaCyber
**************************************************************************************| All Right Reserved! |**************************************************************************************/


//=====================================| Import the Module |=====================================\\

const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const Cluster = require("discord-hybrid-sharding");
const color = require("colors");
require("dotenv").config();

//=====================================| Code |=====================================\\

//====================< Function only >===================\\
const { loadEvents } = require("./Structures/Handlers/Loaders/loadEvents.js");
const { server } = require("./Structures/Handlers/server.js");

//====================< Client >===================\\
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User
    ],
    fetchAllMembers: true,
    shards: Cluster.data.SHARDS_LIST,
    shardCount: Cluster.data.TOTAL_SHARDS
});

//====================< Collection >===================\\
client.commands = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();

client.cluster = new Cluster.Client(client);

//====================< Handlers >===================\\
const handlerz = [
    "antiCrash", "commands"
];

handlerz.forEach(handler => {
    require(`./Structures/Handlers/${handler}`)(client, color);
});

//====================< Login >===================\\
client.login(process.env.TOKEN).then(() => {
    loadEvents(client, color);
    server(client, color);
}).catch(err => {
    console.log(`${color.bold.red(`[INDEX ERROR]`)} ` + `${err}`.bgRed);
});

module.exports = client;

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\                  Bot Coded by GalaXd#9165                   \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */