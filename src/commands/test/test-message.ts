import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
    message_command: {
        id: "test",
        async run(client, interaction) {
            interaction.reply({
                content: "**test**"
            })
        },
    },
    user_command: {
        id: "test",
        async run(client, interaction){
            interaction.reply({
                content: "**test**"
            })
        }
    },
    slachcmd: {
        name: "test",
        description: "just for test",
        permissions: {
            me: "Administrator",
            bot: "Administrator"
        },
        async run(client, interaction) {
            const modal = new ModalBuilder()
                .setCustomId('test')
                .setTitle('KINGMAN TEST');
            const something = new TextInputBuilder()
                .setCustomId('hi')
                .setLabel("Welcome")
                .setStyle(TextInputStyle.Short);
            const ActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(something);
            modal.setComponents(ActionRow)
            await interaction.showModal(modal);

        },
    },
    modal: {
        id: "test",
        async run(client, interaction) {
            interaction.reply({
                content: "Done"
            })
        },
    },
    general: {
        name: "test",
        async run(client, message, args, manager) {
            message.reply("**test**")
        },
    }
} as CommandFilerType