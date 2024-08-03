import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
console.log('All env variables:', process.env);

const connect = async() => {
    try {
    await mongoose.connect(process.env.MONGO);
        console.log("connect")
    } catch (error) {
        throw error
    }
}

console.log('MONGO_URI:', process.env.MONGO);

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

app.listen(8000, () => {
    connect()
    console.log("weszło");
})