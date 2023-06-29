import mongoose from "mongoose";
import Weapons from "../interfaces/weapons.interface";

const schema = new mongoose.Schema<Weapons>({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
    photo: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
})

const WeaponModel = mongoose.model('Weapons', schema)

export default WeaponModel