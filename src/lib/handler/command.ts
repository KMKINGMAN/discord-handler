import { Message, UserContextMenuCommandInteraction, PermissionFlags, ApplicationCommandOptionData, ChatInputCommandInteraction, ModalSubmitInteraction, REST, ApplicationCommandOptionBase, PermissionsBitField, MessageContextMenuCommandInteraction, Routes } from "discord.js"
import { MESSAGE_MANAGER } from "../bot_packages/messageManager";
import { KMCODES } from "../kingman";
export type general = {
    name: string,
    permissions? :{
        me?: keyof PermissionFlags,
        bot?: keyof PermissionFlags
    },
    description?: string,
    examples?: Array<string>,
    usage?: Array<string>,
    category? : string,
    run: (client: KMCODES, message: Message, args: Array<string>, manager?: MESSAGE_MANAGER)=> Promise<void>
}
export type slachcmd = {
    name: string,
    permissions? :{
        me?: keyof PermissionFlags,
        bot?: keyof PermissionFlags
    },
    description: string,
    examples?: Array<string>,
    usage?: Array<string>,
    category? : string,
    options? : Array<ApplicationCommandOptionData>,
    run: (client: KMCODES, interaction: ChatInputCommandInteraction, manager?: MESSAGE_MANAGER)=> Promise<void>
}
export type user_command = {
    id: string,
    run: (client: KMCODES, interaction: UserContextMenuCommandInteraction)=> Promise<void>
}
export type modal = {
    id: string,
    run: (client: KMCODES, interaction: ModalSubmitInteraction)=> Promise<void>
};
export type message_command = {
    id: string,
    run: (client: KMCODES, interaction: MessageContextMenuCommandInteraction)=> Promise<void>
}
export interface CommandFilerType { 
    general?: general,
    slachcmd?: slachcmd,
    user_command?: user_command,
    modal?: modal,
    message_command? :message_command
}
export const load = async(client: KMCODES) => {
    let interaction_commands: { name: string; description?: string; type: number; options?: ApplicationCommandOptionData[] | null; default_permission?: string | null; default_member_permissions?: string | null }[] | { name: string; type: any; }[] = [];
    await Promise.all(    
        client.package.fs.readdirSync("./src/commands/")
        .map(async(dir)=> {
            let command_file = client.package.fs.readdirSync(`./src/commands/${dir}`).filter((f)=> f.endsWith(".ts"));
            await Promise.all(
                command_file.map(async(file)=> {
                    let files = (await import(`../../commands/${dir}/${file}`)).command as CommandFilerType;
                    if(files.general){
                        client.collection.prefix_command.set(files.general.name, files.general)
                    }
                    if(files.slachcmd){
                        client.collection.slash_commands.set(files.slachcmd.name, files.slachcmd);
                        interaction_commands.push({
                            name: files.slachcmd.name,
                            description: files.slachcmd.description,
                            type: 1,
                            options: files.slachcmd.options ? files.slachcmd.options : null,
                            default_member_permissions: files.slachcmd.permissions?.me ? PermissionsBitField.resolve(files.slachcmd.permissions?.me).toString() : null
                        })
                    }
                    if(files.user_command){
                        client.collection.user_commands.set(files.user_command.id, files.user_command);
                        interaction_commands.push({
                            name: files.user_command.id,
                            type: 2,
                        });
                    };
                    if(files.message_command){
                        client.collection.message_commands.set(files.message_command.id, files.message_command);
                        interaction_commands.push({
                            name: files.message_command.id,
                            type: 3,
                        });
                    }
                    if(files.modal){
                        client.collection.modals.set(files.modal.id, files.modal)
                    }
                })
            )
        })
    );
    const rest = new REST({ version: '10' }).setToken(client.config.token);
    try {
        await rest.put(
            Routes.applicationCommands(client.config.id),
            { body: interaction_commands }
        );
        console.log("Loaded All Commands")
    } catch(e) {
        console.log(e)
    }
};