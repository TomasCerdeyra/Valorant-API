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
      unique: true,
    },
    habilities: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ChampionsModel = mongoose.model('Champions', schema);

export default ChampionsModel;