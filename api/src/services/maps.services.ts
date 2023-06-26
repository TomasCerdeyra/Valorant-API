import { Model } from "mongoose";
import Maps from "../interfaces/Maps.interface";
import MapsModel from "../models/maps.model";

class MapsClass {
    collection: Model<Maps>
    constructor() {
        this.collection = MapsModel;
    }

    async getMaps() {
        const maps = await this.collection.find({}).select('-createdAt -updatedAt -_id');

        if (maps.length === 0) return 'NO_MAPS';

        const reorderedMaps = maps.map(map => {
            const { name, description, photos } = map;
            return { name, description, photos };
        });

        return reorderedMaps
    }

    async getUniqueMap(id: string) {
        const map = await this.collection.find({ _id: id })
        console.log(map);

        if (map === null) return 'NO_MAP'
        return map
    }

    async postMap(body: Maps) {
        const postMap = await this.collection.create(body);
        return postMap;
    }
}

const mapsClass = new MapsClass();

export default mapsClass