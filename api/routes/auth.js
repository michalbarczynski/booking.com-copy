import express from "express";

const authRoute = express.Router();

router.get("/", (req, res) => {
    res.send("auth endpoint")
})

router.get("/register", (req, res) => {
    res.send("register endpoint")
})

export default authRoute;