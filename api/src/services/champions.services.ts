import { Model } from "mongoose";
import Champions from "../interfaces/Champions.interface";
import ChampionsModel from "../models/champions.model";
import toCapitalize from "../utils/Capitalize";

class ChampionsClass {
    collection: Model<Champions>
    constructor() {
        this.collection = ChampionsModel;
    }

    /**
     * 
     * @returns { Response }
     */

    async getChampions() {
        const champions = await this.collection.find({}).select('-createdAt -updatedAt -_id');

        if (champions.length === 0) return 'NO_CHAMPIONS';
      
        const reorderedChampions = champions.map(champion => {
          const { name, description, type, habilities} = champion;
          return { name, description, type, habilities };
        });
      
        return reorderedChampions;
    }

    /**
     * @param championName -> string
     * @returns { Response } 
     */
    async getUniqueChampion(championName: string) {
        const champions = await this.collection.findOne({ name: toCapitalize(championName)}).select('-createdAt -updatedAt -_id');
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

    /**
     * 
     * @param agentType -> string
     * @returns { Response }
     */
    async getChampionsByType(agentType: string) {
        // toCapitalize -> Agrega mayuscula a la primera letra
        const getChampions = await this.collection.find({ type: toCapitalize(agentType) });

        if (getChampions.length === 0) return "NOT_FOUND";
        
        // TODO: Ordena objeto de champion
        const finalResponse = getChampions.map(item => {
            const { name, description, type, habilities } = item;
            return {
                name,
                description, 
                type,
                habilities
            }
        });

        return finalResponse;
    }

    /**
     * @param body -> Champions (Interface) 
     * @returns { Response }
     */
    async postChampion(body: Champions) {
        const checkChampion = await this.collection.findOne({ name: body.name })

        if (checkChampion) return "CHAMPION_ALREADY_EXISTS";

        const postChampion = await this.collection.create(body);
        return postChampion;
    }
}

const championsClass = new ChampionsClass();
export default championsClass;