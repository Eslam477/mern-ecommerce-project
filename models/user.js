import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

const userModel = mongoose.model('Users', userSchema)


export default userModel;