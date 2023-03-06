import express from "express";
import auth from "./auth.js";

var userRouts = express.Router()

userRouts.use('/user', auth)


export default userRouts;