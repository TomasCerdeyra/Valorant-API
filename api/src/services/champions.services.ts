import { Model } from "mongoose";
import Champions from "../interfaces/Champions.interface";
import ChampionsModel from "../models/champions.model";

class ChampionsClass {
    collection: Model<Champions>
    constructor () {
        this.collection = ChampionsModel;
    }

    async getChampions() {
        const champions = await this.collection.find({});
        if(champions.length === 0) return 'NO_CHAMPIONS'
        return champions
    }

    async getUniqueChampion(id: string) {
        const champions = await this.collection.find({_id: id})
        console.log(champions);
        
        if (champions === null) return 'NO_CHAMP'
        return champions
    }

    async postChampion(body: Champions) {        
        const postChampion = await this.collection.create(body);
        return postChampion;
    }
}

const championsClass = new ChampionsClass();
export default championsClass;