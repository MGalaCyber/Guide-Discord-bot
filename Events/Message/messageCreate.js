//=====================================| Import the Module |=====================================\\
const { Client, EmbedBuilder, Message } = require("discord.js");

//====================< Settings Module >===================\\
const Config = require("../../Structures/Settings/config.json");
const Emoji = require("../../Structures/Settings/emojis.json");
const Embed = require("../../Structures/Settings/embed.json");

//====================< Others Module >===================\\
const prefix = Config.SETTINGS.Prefix;
const color = require("colors");

//=====================================| Code |=====================================\\

module.exports = {
    name: "messageCreate",

    /**
     * @param {Message} message
     * @param {Client} client
     */

    async execute(message, client) {
        //=========================< Chat Commands >========================\\
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (!message.guild) {
            return message.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setColor(Embed.Colors.WrongColor)
                        .setTitle(`${Emoji.Message.ERROR} Don't Have Permissions!`)
                        .setDescription("You do not have permissions to use this commands in DMs.")
                        .setFooter({ text: `${Embed.Footers.FooterText}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                ]
            });
        };

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        //====================< Find Commands >===================\\
            if (!command) {
                return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.WrongColor)
                            .setTitle("You Have Entered an Invalid Command!")
                            .setDescription(`The command \`${commandName}\` does not exist.\nPlease use \`${prefix}setup\` to setup the bot guide.`)
                            .setFooter({ text: `${Embed.Footers.FooterText}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            };

        //====================< OwnerOnly Commands >===================\\
            if (command.ownerOnly && !Config.OWNER.includes(message.author.id)) {
                return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.WrongColor)
                            .setTitle("You Not Have Permissions!")
                            .setDescription(`This commands can only be used by owner of the bot.`)
                            .setFooter({ text: `${Embed.Footers.FooterText}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            };

        //====================< Start Commands >===================\\
            try {
                command.execute(client, args, message, prefix);
            } catch (error) {
                console.log(`${color.bold.red(`[MESSAGE ERROR]`)} ` + `${error}`.bgRed);
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