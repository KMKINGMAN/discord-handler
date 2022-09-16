import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
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
            let buttons = new ButtonBuilder();
            buttons.setCustomId("test")
            .setStyle(ButtonStyle.Success)
            .setLabel("Hi");
            // const modal = new ModalBuilder()
            //     .setCustomId('test')
            //     .setTitle('KINGMAN TEST');
            // const something = new TextInputBuilder()
            //     .setCustomId('hi')
            //     .setLabel("Welcome")
            //     .setStyle(TextInputStyle.Short);
            // const ActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(something);
            // modal.setComponents(ActionRow)
            // await interaction.showModal(modal);
            const row = new ActionRowBuilder<SelectMenuBuilder>()
			.addComponents(
                new SelectMenuBuilder()
                .setCustomId("test")
                .addOptions(
                    {
                        label: '1',
                        description: 'One Description',
                        value: 'one_value',
                    },
                    {
                        label: '2',
                        description: 'TWO Description',
                        value: 'two_value',
                    },
                ),
			);
            interaction.reply({
                content: `**Test**`,
                components: [row]
            })
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
    },
    select_menu: {
        id: "test",
        async run(client, interaction) {
            interaction.update({
                content: "Selected"
            })
        },
    },
    buttons: [{
        id: "test",
        async run(client, interaction) {
            interaction.reply({
                content: "Button Work"
            })
        },
    }]
} as CommandFilerType
