const mongoose =require("mongoose");

const BillingSchema = mongoose.Schema({
    User :
    {
        type: mongoose.Schema.Types.ObjectId,
        ref :User

    } ,

    Hall :{
        type : mongoose.Schema.Types.ObjectId,
        ref: Hall
    },

    

})