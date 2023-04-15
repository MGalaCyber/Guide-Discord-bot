//=====================================| Import the Module |=====================================\\
const { ChatInputCommandInteraction, Client, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

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

        if (interaction.isButton()) {
            //====================< Main Preview System >===================\\
            if (interaction.customId === "btn-rules") {
                interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.PreviewColor)
                            .setTitle(`\`${interaction.guild.name}\`` + " | RULES")
                            .setDescription("These are the rules for this discord server, f you break those rules given below too many times, it will lead to a ban.\n\nBefore you continue, please make sure that you have read `Discord's Terms of Service` & `Community Guidelines` in button below.")
                            .addFields(
                                { name: "`Rule 1:` ___NSFW___", value: "Posting or sending message that contains inappropriate content will lead you a warn. This discord server is SFW server." },
                                { name: "`Rule 2:` ___Bypassing Words___", value: "There are many blacklisted words in this server, containing offensive & bad words, try not to bypass them. Or else warns are given." },
                                { name: "`Rule 3:` ___Personality___", value: "Be nice to others in this server, fighting, blaming, bullying & arguing will simply give you a warn. If you try to fight with our workers, you'll be warned." },
                                { name: "`Rule 4:` ___Nicknames___", value: "Nicknames that contains offensive/inappropriate content will be changed if one of our staff sees it, doing advertisement using nicknames will give you a warn." },
                                { name: "`Rule 5:` ___Self Advertise___", value: "Discord invite links are blacklisted in this server, if you still try to advertise your social media will give you a warn." },
                                { name: "`Rule 6:` ___Links___", value: "Sending phishing links, NSFW website, or try to hack others using fake links will lead you a ban." },
                                { name: "`Rule 7:` ___Spam___", value: "Flooding the chat above 4 lines or by using certain letters, or sending the same message again & again will lead you a warn." },
                                { name: "`Rule 8:` ___Mention/Ping___", value: "Please do not ping anyone for unnecessary questions. Especially GalaXd, if you ping GalaXd you'll be warned." },
                            )
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder().setCustomId("btn-accept-rules").setLabel("I Accept").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Accepted),
                            new ButtonBuilder().setLabel("Discord's TOS").setStyle(ButtonStyle.Link).setURL(Config.CONNECTIONS.DISCORD_TERMS_OF_SERVICE),
                            new ButtonBuilder().setLabel("Community Guidelines").setStyle(ButtonStyle.Link).setURL(Config.CONNECTIONS.COMMUNITY_GUIDELINES),
                        )
                    ]
                });
            };
            if (interaction.customId === "btn-information") {
                interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.PreviewColor)
                            .setTitle(`\`${interaction.guild.name}\`` + " | INFORMATION")
                            .setDescription("What type of information on the server that you want to see? Please select one of the options in the menu shown below.")
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new SelectMenuBuilder()
                            .setCustomId("select-information")
                            .setPlaceholder("Please select any options in select option.")
                            .addOptions(
                                { label: "Social Media perks", value: "select-social-media", emoji: Emoji.Selects.Information.SocialMedia },
                                { label: "Infractions", value: "select-infraction", emoji: Emoji.Selects.Information.Infractions },
                            ) // if you need to add any options, please edit the select menu options
                        )
                    ]
                });
            };
            if (interaction.customId === "btn-roles") {
                interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.PreviewColor)
                            .setTitle(`\`${interaction.guild.name}\`` + " | ROLES")
                            .setDescription("What kind of role do you want to personalize yourself with? Please click the buttons below to continue the interaction.")
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder().setCustomId("btn-pronouns").setLabel("Pronouns").setStyle(ButtonStyle.Success),
                            new ButtonBuilder().setCustomId("btn-notification").setLabel("Notification").setStyle(ButtonStyle.Success),
                            new ButtonBuilder().setCustomId("btn-color").setLabel("Colors").setStyle(ButtonStyle.Success),
                        )
                    ]
                });
            };
            if (interaction.customId === "btn-intro") {
                const introModal = new ModalBuilder()
                    .setCustomId("modal-intro")
                    .setTitle("Introduction About You")
                        introModal.addComponents(
                            new ActionRowBuilder().addComponents(
                                new TextInputBuilder()
                                    .setCustomId("intro-realname")
                                    .setLabel("What is your real name?")
                                    .setStyle(TextInputStyle.Short)
                                    .setPlaceholder("Write your text here....")
                                    .setRequired(true)
                            ),
                            new ActionRowBuilder().addComponents(
                                new TextInputBuilder()
                                    .setCustomId("intro-birthday")
                                    .setLabel("what date were you born?")
                                    .setStyle(TextInputStyle.Short)
                                    .setPlaceholder("Write your text here....")
                                    .setRequired(true)
                            ),
                            new ActionRowBuilder().addComponents(
                                new TextInputBuilder()
                                    .setCustomId("intro-age")
                                    .setLabel("How old are you?")
                                    .setStyle(TextInputStyle.Short)
                                    .setPlaceholder("Write your text here....")
                                    .setRequired(true)
                            ),
                            new ActionRowBuilder().addComponents(
                                new TextInputBuilder()
                                    .setCustomId("intro-origin")
                                    .setLabel("Where you from?")
                                    .setStyle(TextInputStyle.Short)
                                    .setPlaceholder("Write your text here....")
                                    .setRequired(true)
                            ),
                            new ActionRowBuilder().addComponents(
                                new TextInputBuilder()
                                    .setCustomId("intro-hobby")
                                    .setLabel("What are your hobbies?")
                                    .setStyle(TextInputStyle.Paragraph)
                                    .setPlaceholder("Write your text here....")
                                    .setRequired(true)
                            ),
                        )
                    await interaction.showModal(introModal);
            };
            if (interaction.customId === "btn-feedback") {
                const feedbackModal = new ModalBuilder()
                    .setCustomId("modal-feedback")
                    .setTitle("Feedback Us")
                        feedbackModal.addComponents(
                            new ActionRowBuilder().addComponents(
                                new TextInputBuilder()
                                    .setCustomId("feedback-description")
                                    .setLabel("Whats the feedback for you want to sent?")
                                    .setStyle(TextInputStyle.Paragraph)
                                    .setMinLength(10)
                                    .setMaxLength(1024)
                                    .setPlaceholder("Write your text here....")
                                    .setRequired(true)
                            ),
                        )
                    await interaction.showModal(feedbackModal);
            };

            //====================< Accept Rules System >===================\\
            if (interaction.customId === "btn-accept-rules") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.AcceptRoles}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.AcceptRoles}`);
                    return interaction.reply({ content: `${interaction.member} hope you will follow all the rules, now you have access to all server`, ephemeral: true });
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.AcceptRoles}`)) {
                    return interaction.reply({ content: `${interaction.member} you have already accepted the rules`, ephemeral: true });
                };
            };

            //====================< Main Roles System >===================\\
            if (interaction.customId === "btn-pronouns") {
                interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.PreviewColor)
                            .setTitle(`\`${interaction.guild.name}\`` + " | PRONOUNS")
                            .setDescription("To let everyone know to use your pronoun while communicating with you on this server.")
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder().setCustomId("btn-gender-male").setLabel("Male").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Pronouns.Male),
                            new ButtonBuilder().setCustomId("btn-gender-female").setLabel("Female").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Pronouns.Female),
                        )
                    ]
                });
            };
            if (interaction.customId === "btn-notification") {
                interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.PreviewColor)
                            .setTitle(`\`${interaction.guild.name}\`` + " | NOTIFICATION")
                            .setDescription("Be notified with the latest giveaway, announcement, and youtube video uploads. Don't miss out big events though.")
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder().setCustomId("btn-notif-announcement").setLabel("Announcement").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Notifications.Announcement),
                            new ButtonBuilder().setCustomId("btn-notif-upload").setLabel("Upload").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Notifications.Upload),
                            new ButtonBuilder().setCustomId("btn-notif-poll").setLabel("Poll").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Notifications.Polls),
                            new ButtonBuilder().setCustomId("btn-notif-event").setLabel("Event/Giveaway").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Notifications.Event),
                            new ButtonBuilder().setCustomId("btn-notif-partner").setLabel("Partner").setStyle(ButtonStyle.Success).setEmoji(Emoji.Buttons.Notifications.Partner),
                        )
                    ]
                });
            };
            if (interaction.customId === "btn-color") {
                interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.PreviewColor)
                            .setTitle(`\`${interaction.guild.name}\`` + " | COLOR")
                            .setDescription("Make your server profile look proffesional and prettier. Chatting in the server will also affect your color.")
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new SelectMenuBuilder()
                            .setCustomId("select-color-role")
                            .setPlaceholder("Please select any rolest for add to you profile.")
                            .addOptions(
                                { label: "Red", value: "select-color-red", description: "Click me to get the red role.", emoji: Emoji.Selects.Color.Red },
                                { label: "Pink", value: "select-color-pink", description: "Click me to get the pink role.", emoji: Emoji.Selects.Color.Pink },
                                { label: "Orange", value: "select-color-orange", description: "Click me to get the orange role.", emoji: Emoji.Selects.Color.Orange },
                                { label: "Yellow", value: "select-color-yellow", description: "Click me to get the yellow role.", emoji: Emoji.Selects.Color.Yellow },
                                { label: "Magenta", value: "select-color-magenta", description: "Click me to get the magenta role.", emoji: Emoji.Selects.Color.Magenta },
                                { label: "Purple", value: "select-color-purple", description: "Click me to get the purple role.", emoji: Emoji.Selects.Color.Purple },
                                { label: "Lime", value: "select-color-lime", description: "Click me to get the lime role.", emoji: Emoji.Selects.Color.Lime },
                                { label: "Green", value: "select-color-green", description: "Click me to get the green role.", emoji: Emoji.Selects.Color.Green },
                                { label: "Cyan", value: "select-color-cyan", description: "Click me to get the cyan role.", emoji: Emoji.Selects.Color.Cyan },
                                { label: "Blue", value: "select-color-blue", description: "Click me to get the blue role.", emoji: Emoji.Selects.Color.Blue },
                                { label: "Brown", value: "select-color-brown", description: "Click me to get the brown role.", emoji: Emoji.Selects.Color.Brown },
                                { label: "White", value: "select-color-white", description: "Click me to get the white role.", emoji: Emoji.Selects.Color.White },
                                { label: "Silver", value: "select-color-silver", description: "Click me to get the silver role.", emoji: Emoji.Selects.Color.Silver },
                                { label: "Gray", value: "select-color-gray", description: "Click me to get the gray role.", emoji: Emoji.Selects.Color.Gray },
                                { label: "Black", value: "select-color-black", description: "Click me to get the black role.", emoji: Emoji.Selects.Color.Black },
                            ) // if you need to add any options, please edit the select menu options
                        )
                    ]
                });
            };

            //====================< Give/Remove Pronouns Roles System >===================\\
            if (interaction.customId === "btn-gender-male") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Pronouns.Male}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Pronouns.Male}`)
                    return interaction.reply({ content: `**[Added]** Male Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Pronouns.Male}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Pronouns.Male}`)
                    return interaction.reply({ content: `**[Removed]** Male Role`, ephemeral: true })
                };
            };
            if (interaction.customId === "btn-gender-female") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Pronouns.Female}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Pronouns.Female}`)
                    return interaction.reply({ content: `**[Added]** Female Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Pronouns.Female}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Pronouns.Female}`)
                    return interaction.reply({ content: `**[Removed]** Female Role`, ephemeral: true })
                };
            };

            //====================< Give/Remove Notification Roles System >===================\\
            if (interaction.customId === "btn-notif-announcement") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.AnnouncementRoles}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Notification.AnnouncementRoles}`)
                    return interaction.reply({ content: `**[Added]** Announcement Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.AnnouncementRoles}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Notification.AnnouncementRoles}`)
                    return interaction.reply({ content: `**[Removed]** Announcement Role`, ephemeral: true })
                };
            };
            if (interaction.customId === "btn-notif-upload") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.UploadRoles}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Notification.UploadRoles}`)
                    return interaction.reply({ content: `**[Added]** Youtube Upload Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.UploadRoles}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Notification.UploadRoles}`)
                    return interaction.reply({ content: `**[Removed]** Youtube Upload Role`, ephemeral: true })
                };
            };
            if (interaction.customId === "btn-notif-poll") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.PollRoles}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Notification.PollRoles}`)
                    return interaction.reply({ content: `**[Added]** Poll Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.PollRoles}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Notification.PollRoles}`)
                    return interaction.reply({ content: `**[Removed]** Poll Role`, ephemeral: true })
                };
            };
            if (interaction.customId === "btn-notif-event") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.EventRoles}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Notification.EventRoles}`)
                    return interaction.reply({ content: `**[Added]** Events Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.EventRoles}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Notification.EventRoles}`)
                    return interaction.reply({ content: `**[Removed]** Events Role`, ephemeral: true })
                };
            };
            if (interaction.customId === "btn-notif-partner") {
                if (!member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.PartnerRoles}`)) {
                    await member.roles.add(`${Config.SETTINGS.Roles.Notification.PartnerRoles}`)
                    return interaction.reply({ content: `**[Added]** Partner announce Role`, ephemeral: true })
                } else if (member.roles.cache.has(`${Config.SETTINGS.Roles.Notification.PartnerRoles}`)) {
                    await member.roles.remove(`${Config.SETTINGS.Roles.Notification.PartnerRoles}`)
                    return interaction.reply({ content: `**[Removed]** Partner announce Role`, ephemeral: true })
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