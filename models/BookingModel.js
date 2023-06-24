const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        unique: true

    },
    Mobile: {
        type: String
    },

    HallID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hall'

    },
    Date: {
        type: Date,
        default: () => {
            const now = new Date();
            return new Date(now.getFullYear(), now.getMonth(), now.getDate());
        },
    },
    Purpose :{
        type: String,
    },
    status: {
        type: String,
        default: "pending"
    }

})

let Booking = mongoose.model("Booking", BookingSchema)

module.exports = Booking;