import { Model } from "mongoose";
import Champions from "../interfaces/Champions.interface";
import ChampionsModel from "../models/champions.model";

class ChampionsClass {
    collection: Model<Champions>
    constructor() {
        this.collection = ChampionsModel;
    }

    async getChampions() {
        const champions = await this.collection.find({}).select('-createdAt -updatedAt -_id');

        if (champions.length === 0) return 'NO_CHAMPIONS';
      
        const reorderedChampions = champions.map(champion => {
          const { name, description, type, habilities} = champion;
          return { name, description, type, habilities };
        });
      
        return reorderedChampions;
    }

    async getUniqueChampion(id: string) {
        const champions = await this.collection.find({ _id: id })
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