import mongoose from "mongoose";
import "dotenv/config"

const connectMongo = async () => {
    const uri = <string>process.env.MONGO_URI;
    try {
        await mongoose.connect(uri)
        console.log("Mongo connect");
    } catch (error) {
        console.log('Error connect Mongo');
    }
}

export default connectMongo