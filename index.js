import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import hotelsRoute from "./api/routes/hotels.js";
import roomsRoute from "./api/routes/rooms.js"

const app = express();
dotenv.config();

const connect = async() => {
    try {
    await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tlsAllowInvalidCertificates: true 
    });
        console.log("connect")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// middlewares
app.use(express.json)

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
    connect()
    console.log("Server is running on port 8800");
});