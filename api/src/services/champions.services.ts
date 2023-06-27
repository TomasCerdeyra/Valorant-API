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
        const champions = await this.collection.findOne({_id: id}).select('-createdAt -updatedAt -_id');
        if (champions === null) return 'NO_CHAMP'
        const { name, description, type, habilities } = champions;

        const itemResponse = { 
            name,
            description, 
            type,
            habilities
         }  

        return itemResponse
    }

    async postChampion(body: Champions) {
        const checkChampion = await this.collection.findOne({ name: body.name })

        if (checkChampion) return "CHAMPION_ALREADY_EXISTS"

        const postChampion = await this.collection.create(body);
        return postChampion;
    }
}

const championsClass = new ChampionsClass();
export default championsClass;