// Users Who booking The Halls

const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name: {
        type: String,
        require : true
    },
    Email : {
        type: String,
    },
    Mobile:{
        type: String,
    }
})

let Client = mongoose.model("Client", ClientSchema)

module.exports = Client;