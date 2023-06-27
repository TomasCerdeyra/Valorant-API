import mongoose from "mongoose";
import Champions from "../interfaces/Champions.interface";

const schema = new mongoose.Schema<Champions>(
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
    type: {
      type: String,
      trim: true,
      required: true,
    },
    habilities: {
      hability1: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
      hability2: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
      hability3: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
      hability4: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ChampionsModel = mongoose.model('Champions', schema);

export default ChampionsModel;