<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="KINGMAN DEV" src="https://i.top4top.io/p_1965sxw291.png">  

# Discord Handler

![](https://img.shields.io/github/stars/kmkingman/discord-handler.svg) ![](https://img.shields.io/github/forks/kmkingman/discord-handler.svg) ![](https://img.shields.io/github/tag/kmkingman/discord-handler.svg) ![](https://img.shields.io/github/release/kmkingman/discord-handler.svg) ![](https://img.shields.io/github/issues/kmkingman/discord-handler.svg)

<br>

### About This Handler
The Ultimate Discord.js Handler Template which handles fast and effectively Commands and Events.<br>This project was written using typescript Which may help you get help when using the code editor.


### Features

- prefix command handler
- message command handler
- user command handler
- buttons handler
- select menu handler
- modal handler
- kmcodes message manager
- discord.js@14.3.0

#### install and run

Download the project and extract the files, then go to the extracted file 

![Download the project ](https://media.discordapp.net/attachments/1019677225114664980/1020676747567562824/unknown.png "Download the project ")

or you can download the project using git
```shell
git clone https://github.com/KMKINGMAN/discord-handler.git
cd discord-handler
```
Open `Terminal`/`shell` or `cmd` and download the packages via the command
```shell
npm install
```
Now create an `.env` file and put your bot informationon it or just use `src/config.json` file
```.env
token=BOT_TOKEN
prefix=BOT_PREFIX
mongo=MONGO DB CONNECTION LINK
client_id=YOUR_BOT_ID
```
Start the project using
```shell
npm start
```
### How to use the events handler
Go to `src/events/` Create a single group by creating a new folder <br>
Go to the folder and then create a new file that should end in typescript
for example `src/events/start/ready.ts`
now paste a template for events handler 
```typescript
import { EventsTyper } from "../../lib/handler/events";
export let events = {
    name: "", // event name
    async run(client){ // event callback
	//You Code Here
    }
} as EventsTyper;
```
### How to use the command handler
Go to `src/commands/` Create a single group by creating a new folder <br>
Go to the folder and then create a new file that should end in typescript
for example `src/commands/start/hello.ts`
now paste a template for command handler 
##### prefix command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
    general: {
        name: "", // command name
        async run(client, message, args, manager) {//Callbak
            //Your Code Here
        },
    }
} as CommandFilerType
```
##### message command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
 message_command: {
        id: "", // command id
        async run(client, interaction) {
		//Your Code Here
        },
    },
} as CommandFilerType
```
##### slash command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
slachcmd: {
        name: "", //Command Name
        description: "", // Command des
        permissions: { // You can use it or just remove it
            me: "",
            bot: ""
        },
		options: [], // [<ApplicationCommandOptionData>]You Can use it or just remove it 
        async run(client, interaction) {
		 //Your Code Here
		})
        },
    },
} as CommandFilerType
```
##### user command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
    user_command: {
        id: "",//Command id
        async run(client, interaction){
		//Your Code
        }
    },
} as CommandFilerType
```
##### modal command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
    modal: {
        id: "",//Command ID
        async run(client, interaction) {
		//Your Code Here
        },
    },
} as CommandFilerType
```
##### select_menu command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
 select_menu: {
        id: "",//Commad ID
        async run(client, interaction) {
		//Your Code Here
        },
    },
} as CommandFilerType
```
##### buttons command template
```typescript
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalActionRowComponentBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder } from "discord.js";
import { CommandFilerType } from "../../lib/handler/command";
export let command = {
    buttons: [{ // ITS ARRAY YOU CAN USE MORE THAN ONE BTN
        id: "",//Button id
        async run(client, interaction) {
		//Your Code Here
        },
    }]
} as CommandFilerType
```
You can use them all in one file see `src/commands/test/test-message.ts `

# Support
my telegram channel: https://t.me/kingman4hack
<br>
my instagram: https://instagram.com/km.kingman
