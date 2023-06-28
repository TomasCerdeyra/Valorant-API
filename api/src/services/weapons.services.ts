import { Model } from "mongoose";
import Weapons from "../interfaces/weapons.interface";
import WeaponModel from "../models/weapons.model";

class WeaponsClass {
    collection = Model<Weapons>
    constructor() {
        this.collection = WeaponModel
    }

    async getWeapons() {
        const weapons = await this.collection.find({}).select('-createdAt -updatedAt -_id');

        if (weapons.length === 0) return 'NO_WEAPONS'

        return weapons
    }

    async getUniqueWeapon(id: String) {
        const weapon = await this.collection.find({ 'name': id }).select('-createdAt -updatedAt -_id');

        if (weapon.length === 0) return 'NO_WEAPON'

        return weapon
    }

    async getWeaponsByType(type: String) {
        const weapons = await this.collection.find({ 'type': type }).select('-createdAt -updatedAt -_id');
        
        if (weapons.length === 0) return 'NO_WEAPON'

        return weapons
    }

    async postWepons(body: Weapons){
        const weapon = await this.collection.findOne(body)

        if(weapon) return 'WEAPONS_EXIST'

        const postWeapon = await this.collection.create(body)

        return postWeapon
    }

}

const weapoClass = new WeaponsClass()

export default weapoClass