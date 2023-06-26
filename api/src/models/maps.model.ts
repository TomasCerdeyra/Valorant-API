import mongoose from "mongoose";
import Maps from "../interfaces/Maps.interface";

const schema = new mongoose.Schema<Maps>(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        photos: {
            photo1: {
                type: String,
                trim: true,
                required: true,
                unique: true
            },
            photo2: {
                type: String,
                trim: true,
                required: true,
                unique: true
            },
            photo3: {
                type: String,
                trim: true,
                required: true,
                unique: true
            },
            photo4: {
                type: String,
                trim: true,
                required: true,
                unique: true
            },
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const MapsModel = mongoose.model('Maps', schema)

export default MapsModel
