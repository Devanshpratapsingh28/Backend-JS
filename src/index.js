// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
// 2nd approach


/*
// 1st approach
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
const app = express()
// IIFE : Immediately Invoked Function Expression ()()
( async () => {
    try {
        await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
        console.log("Connected to MongoDB");

        app.on("error", (err) => {
            console.log("ERR..",err);

        })

        app.listen(process.env.PORT , () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    }
    catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
} 
)()
*/