const mongoose = require("mongoose");

const HallSchema = mongoose.Schema({
    HallName: {
        type: String,
        require: true
    },
    amenities: {
        type: [String]

    },
    Location : {
        type: String
    },
    Capacity: {
        type: String,
    },
    Price :{
        type:String
    },
    Status: {
        type: String,
        default: 'Available'
    }
})

let Hall = mongoose.model("Hall", HallSchema)

module.exports = Hall;