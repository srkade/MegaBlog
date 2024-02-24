import conf from "../conf/conf";
import { Client,ID, Databases,Storage,Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
    }
}

const service = new Service();
export default service