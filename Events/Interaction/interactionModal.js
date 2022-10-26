//=====================================| Import the Module |=====================================\\
const { InteractionType, ChatInputCommandInteraction, Client, EmbedBuilder, WebhookClient } = require("discord.js");

//====================< Settings Module >===================\\
const Webhook = require("../../Structures/Settings/webhooks.json");
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
        if (interaction.type === InteractionType.ModalSubmit) {
            if (interaction.customId === "modal-intro") {
                const realName = interaction.fields.getTextInputValue("intro-realname");
                const birthday = interaction.fields.getTextInputValue("intro-birthday");
                const age = interaction.fields.getTextInputValue("intro-age");
                const origin = interaction.fields.getTextInputValue("intro-origin");
                const hobby = interaction.fields.getTextInputValue("intro-hobby");
                const user = interaction.member;
                const guild = interaction.guild;

                const introLogs = new WebhookClient({
                    id: Webhook.SystemLogs.Intro.ID,
                    token: Webhook.SystemLogs.Intro.TOKEN
                });

                introLogs.send({
                    username: client.user.username + " | User Intro",
                    avatarURL: client.user.displayAvatarURL(),
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.MainColor)
                            .setAuthor({ name: `${user.user.tag}`, iconURL: guild.iconURL({ dynamic: true }) })
                            .setTitle("New User Intro")
                            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
                            .addFields(
                                { name: "What is your real name?", value: `\`\`\`yml\n${realName}\`\`\`` },
                                { name: "what date were you born?", value: `\`\`\`yml\n${birthday}\`\`\`` },
                                { name: "How old are you?", value: `\`\`\`yml\n${age}\`\`\`` },
                                { name: "Where you from?", value: `\`\`\`yml\n${origin}\`\`\`` },
                                { name: "What are your hobbies?", value: `\`\`\`yml\n${hobby}\`\`\`` },
                            )
                    ]
                });

                await interaction.reply({
                    ephemeral: true,
                    content: `You introduction has been sent.`
                });
            };
            if (interaction.customId === "modal-feedback") {
                const feedbackDesk = interaction.fields.getTextInputValue("feedback-description");
                const user = interaction.member;
                const guild = interaction.guild;

                const feedbackLogs = new WebhookClient({
                    id: Webhook.SystemLogs.Feedback.ID,
                    token: Webhook.SystemLogs.Feedback.TOKEN
                });

                feedbackLogs.send({
                    username: client.user.username + " | User Feedback",
                    avatarURL: client.user.displayAvatarURL(),
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.MainColor)
                            .setAuthor({ name: `${user.user.tag}`, iconURL: guild.iconURL({ dynamic: true }) })
                            .setTitle("New User sent Feedback")
                            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
                            .addFields(
                                { name: "Whats the feedback for you want to sent?", value: `\`\`\`yml\n${feedbackDesk}\`\`\`` },
                            )
                    ]
                });

                await interaction.reply({
                    ephemeral: true,
                    content: `You feedback has been sent.`
                });
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