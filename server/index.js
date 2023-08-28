import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import route from "./Routes/routes.js";
import cors from "cors"; 
dotenv.config()

const app = express();

//middle wares
app.use(cors());
app.use(express.json())
app.use("/info", route)

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongo DB");
    } catch(err) {
        console.log(err);
    }
}

app.listen(5001, () => {
    connect();
    console.log("Server is running");
})