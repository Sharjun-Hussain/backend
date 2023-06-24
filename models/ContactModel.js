// Contact Us Form Details model
const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    Name: {
        type: String,
        require : true
    },
    Email : {
        type: String,
    },
    Mobile:{
        type: String,
    },
    Hall:{
        type: String,
    },
    Message:{
        type: String,
    }
})

let Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact;