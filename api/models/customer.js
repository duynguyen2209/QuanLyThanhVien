const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        email: { 
            type: String,
            required: true
        },
        dateofbirth: {
            type: String,
            required: true
        },
        level: {
            type: String
        },
        password:{
            type:String,
            required:true
        },
        last_seen:{
            type: Date,
        }
    },
);

module.exports = mongoose.model("User", UserSchema)