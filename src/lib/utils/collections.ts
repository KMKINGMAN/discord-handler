/**
 *     public prefix_commands: Collection<string, Promise<void>>;
    public slash_commands: Collection<string, Promise<void>>;
    public user_commands: Collection<string, Promise<void>>;
    public message_commands: Collection<string, Promise<void>>;
    public modals: Collection<string, Promise<void>>;
    public events: Collection<string, Promise<void>>;
 */
import { Collection } from "discord.js";
import { CommandFilerType, general, message_command, modal, slachcmd, user_command } from "./../handler/command"
export let collection = () => {
    return {
        user_commands: new Collection<string, user_command>(),
        slash_commands: new Collection<string, slachcmd>(),
        message_commands: new Collection<string, message_command>(),
        prefix_command: new Collection<string, general>(),
        modals: new Collection<string, modal>(),
        events: new Collection<string, Promise<void>>()
    }
}