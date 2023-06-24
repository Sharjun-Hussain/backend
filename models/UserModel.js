
// Hall Owners Future Update

const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String

    },

    LastName: {
        type: String

    },

    Email: {
        type: String,
        validate : validator.isEmail,
        unique :true

    },

    Mobile: {
        type: String

    },

    Password: {
        type: String,
        Select: false
    },

    Password2: {
        type: String,
        Select: false
    },


    HallName: {
        type: String

    },

    Capacity: {
        type: String
    },

    amenities: {
        type: [String]

    },

    images: {
        type: String

    },


    createdAt: {
        type: Date,
        default: Date.now
    }


})



let users = mongoose.model('users', userSchema);

module.exports = users;