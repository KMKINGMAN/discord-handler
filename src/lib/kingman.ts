import { Client, ClientOptions, Collection } from "discord.js";
import { collection } from "./utils/collections";
import { config } from "./utils/config";
import * as pkg from "./utils/packages";
import { load as load_handler } from "./handler/command";
import { load as  load_events } from "./handler/events";
import * as managers from "./utils/managers"
export class KMCODES extends Client {
    public package: typeof pkg;
    public collection: ReturnType<typeof collection>;
    public config: ReturnType<typeof config>;
    public managers: typeof managers
    constructor(ops: ClientOptions){
        super(ops);
        this.package = pkg;
        this.managers = managers
        this.collection = collection();
        this.config = config(this);
        (async()=>{
            await this.load_handlers()
        })();
    };
    async load_handlers(){
        await load_handler(this);
        await load_events(this)
    }
}