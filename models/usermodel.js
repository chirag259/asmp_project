import mongoose, { Schema, models } from "mongoose";


const UserSchema =new Schema({
    name:{
        type: String,
        required: true,
        unique: true , 
        lowercase:true 
    },
    email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true,
    }
    },{timestamps:true});

    const User = models.User || mongoose.model("User",UserSchema);
    export default User;