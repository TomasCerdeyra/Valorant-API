import { Model } from "mongoose";
import Champions from "../interfaces/Champions.interface";
import ChampionsModel from "../models/champions.model";

class ChampionsClass {
    collection: Model<Champions>
    constructor () {
        this.collection = ChampionsModel;
    }

    async getChampions() {}

    async getUniqueChampion(id: string) {}

    async postChampion(body: Champions) {        
        const postChampion = await this.collection.create(body);
        return postChampion;
    }
}

const championsClass = new ChampionsClass();
export default championsClass;