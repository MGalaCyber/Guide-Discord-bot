//=====================================| Import the Module |=====================================\\
const { Client, EmbedBuilder, Message, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

//====================< Settings Module >===================\\
const Config = require("../../Structures/Settings/config.json");
const Emoji = require("../../Structures/Settings/emojis.json");
const Embed = require("../../Structures/Settings/embed.json");

//====================< Function Module >===================\\
const { errorCmdLogsMsg } = require("../../Structures/Functions/errorCmdLogs.js");

//====================< Others Module >===================\\
const { author, version } = require(`../../package.json`);

//=====================================| Code |=====================================\\

module.exports = {
    name: "setup",
    description: "Setup guide of the bot in this server.",
    ownerOnly: true,

    /**
     * @param {Message} message
     * @param {Client} client
     */

    async execute(client, args, message, prefix) {
        try {
            await message.delete(1);
            const buttonRow1 = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId("btn-rules")
                    .setLabel("View Rules")
                    .setStyle(ButtonStyle.Success)
                    .setEmoji(Emoji.Buttons.Rules),
                new ButtonBuilder()
                    .setCustomId("btn-information")
                    .setLabel("Information")
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji(Emoji.Buttons.Information),                
                new ButtonBuilder()
                    .setCustomId("btn-roles")
                    .setLabel("Get Roles")
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji(Emoji.Buttons.Roles),
                new ButtonBuilder()
                    .setCustomId("btn-intro")
                    .setLabel("Introduction")
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji(Emoji.Buttons.Introduction),
                new ButtonBuilder()
                    .setCustomId("btn-feedback")
                    .setLabel("FeedBack")
                    .setStyle(ButtonStyle.Success)
                    .setEmoji(Emoji.Buttons.Feedback),
            );
            const buttonRow2 = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setLabel("Website")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Config.CONNECTIONS.WEBSITE)
                    .setEmoji(Emoji.Buttons.Website),
                new ButtonBuilder()
                    .setLabel("Youtube")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Config.CONNECTIONS.YOUTUBE)
                    .setEmoji(Emoji.Buttons.Notifications.Upload),
                new ButtonBuilder()
                    .setLabel("Discord Server")
                    .setStyle(ButtonStyle.Link)
                    .setURL(Config.CONNECTIONS.DISCORD_SUPPORT)
                    .setEmoji(Emoji.Buttons.Link),
            );

            const embedView = new EmbedBuilder()
                .setColor(Embed.Colors.MainColor)
                .setTitle(`${message.guild.name} | Server Guide!`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`Hey! Thanks for joining **${message.guild.name}**! This is a community discord server and in this server ou can talk with other members and hang around, ask for help, etc...`)

            message.channel.send({
                embeds: [embedView],
                components: [buttonRow1, buttonRow2] // if you can add new row, please create one
            });

        } catch (error) {
            errorCmdLogsMsg(client, message, error);
        };
    }
};

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