const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");


const AdminSchema = new mongoose.Schema({
    Name : {
        type : String
        
    },

    Password : {
        type : String,
        required : [true, "Enter Password"]
    },

    Email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Please Enter Valid Email"],
        unique : true

    }
})

AdminSchema.methods.getJWTToken = function (){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET ,{
        expiresIn:process.env.JWT_EXPIRES_IN,
    })
}

let admin = mongoose.model("admin" ,AdminSchema);
module.exports = admin;