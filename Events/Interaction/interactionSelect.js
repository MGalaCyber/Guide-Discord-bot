//=====================================| Import the Module |=====================================\\
const { InteractionType, ChatInputCommandInteraction, Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

//====================< Settings Module >===================\\
const Config = require("../../Structures/Settings/config.json");
const Emoji = require("../../Structures/Settings/emojis.json");
const Embed = require("../../Structures/Settings/embed.json");

//====================< Others Module >===================\\
const { author, version } = require(`../../package.json`);

//=====================================| Code |=====================================\\

module.exports = {
    name: "interactionCreate",

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(interaction, client) {
        const { member, user, guild } = interaction;

        if (interaction.isSelectMenu()) {
            //====================< Information System >===================\\
            if (interaction.customId === "select-information") {
                const value = interaction.values[0];

                if (value === "select-social-media") {
                    interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.PreviewColor)
                                .setTitle(`\`${interaction.guild.name}\`` + " | SOCIAL PERKS")
                                .setDescription("You can get some special hoisted roles if you have certain amount of followers/subscribers in a social media given below.")
                                .addFields(
                                    { name: `\`Name 1\``, value: "Value 1", inline: true },
                                    { name: `\`Name 2\``, value: "Value 2", inline: true },
                                    { name: `\`Name 3\``, value: "Value 3", inline: true },
                                )
                        ]
                    });
                };
                if (value === "select-infraction") {
                    interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.PreviewColor)
                                .setTitle(`\`${interaction.guild.name}\`` + " | INFRACTIONS")
                                .setDescription("A warning will be given to you if you break the server rules in many ways. Else you will get these punishments when you reach a specific number of warnings shown below.")
                                .addFields(
                                    { name: `\`Warning: 2\``, value: "1 hour Timeout", inline: true },
                                    { name: `\`Warning: 5\``, value: "6 hour Timeout", inline: true },
                                    { name: `\`Warning: 8\``, value: "1 day Timeout", inline: true },
                                    { name: `\`Warning: 12\``, value: "Kick", inline: true },
                                    { name: `\`Warning: 15\``, value: "Banned", inline: true },
                                )
                        ]
                    });
                };
            };

            //====================< Color System >===================\\
            if (interaction.customId === "select-color-role") {
                const value = interaction.values[0];

                if (value === "select-color-red") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Red}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Red}`)
                        return interaction.reply({ content: `**[Added]** Red Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Red}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Red}`)
                        return interaction.reply({ content: `**[Removed]** Red Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-pink") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Pink}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Pink}`)
                        return interaction.reply({ content: `**[Added]** Pink Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Pink}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Pink}`)
                        return interaction.reply({ content: `**[Removed]** Pink Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-orange") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Orange}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Orange}`)
                        return interaction.reply({ content: `**[Added]** Orange Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Orange}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Orange}`)
                        return interaction.reply({ content: `**[Removed]** Orange Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-yellow") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Yellow}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Yellow}`)
                        return interaction.reply({ content: `**[Added]** Yellow Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Yellow}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Yellow}`)
                        return interaction.reply({ content: `**[Removed]** Yellow Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-magenta") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Magenta}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Magenta}`)
                        return interaction.reply({ content: `**[Added]** Magenta Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Magenta}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Magenta}`)
                        return interaction.reply({ content: `**[Removed]** Magenta Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-purple") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Purple}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Purple}`)
                        return interaction.reply({ content: `**[Added]** Purple Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Purple}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Purple}`)
                        return interaction.reply({ content: `**[Removed]** Purple Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-lime") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Lime}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Lime}`)
                        return interaction.reply({ content: `**[Added]** Lime Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Lime}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Lime}`)
                        return interaction.reply({ content: `**[Removed]** Lime Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-green") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Green}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Green}`)
                        return interaction.reply({ content: `**[Added]** Green Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Green}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Green}`)
                        return interaction.reply({ content: `**[Removed]** Green Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-cyan") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Cyan}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Cyan}`)
                        return interaction.reply({ content: `**[Added]** Cyan Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Cyan}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Cyan}`)
                        return interaction.reply({ content: `**[Removed]** Cyan Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-blue") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Blue}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Blue}`)
                        return interaction.reply({ content: `**[Added]** Blue Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Blue}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Blue}`)
                        return interaction.reply({ content: `**[Removed]** Blue Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-brown") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Brown}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Brown}`)
                        return interaction.reply({ content: `**[Added]** Brown Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Brown}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Brown}`)
                        return interaction.reply({ content: `**[Removed]** Brown Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-white") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.White}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.White}`)
                        return interaction.reply({ content: `**[Added]** White Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.White}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.White}`)
                        return interaction.reply({ content: `**[Removed]** White Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-silver") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Silver}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Silver}`)
                        return interaction.reply({ content: `**[Added]** Silver Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Silver}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Silver}`)
                        return interaction.reply({ content: `**[Removed]** Silver Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-gray") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Gray}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Gray}`)
                        return interaction.reply({ content: `**[Added]** Gray Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Gray}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Gray}`)
                        return interaction.reply({ content: `**[Removed]** Gray Color Role`, ephemeral: true })
                    };
                };
                if (value === "select-color-black") {
                    if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Black}`)) {
                        await member.roles.add(`${Config.SETTINGS.Roles.Color.Black}`)
                        return interaction.reply({ content: `**[Added]** Black Color Role`, ephemeral: true })
                    } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Color.Black}`)) {
                        await member.roles.remove(`${Config.SETTINGS.Roles.Color.Black}`)
                        return interaction.reply({ content: `**[Removed]** Black Color Role`, ephemeral: true })
                    };
                };
            };
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