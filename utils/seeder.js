
const admin= require('../models/AdminModel');
const booking= require('../models/BookingModel')
const bookingdata = require('../Data/Booking.json')
const halls = require('../models/HallsModel');
const users = require('../models/UserModel');
const userdata = require('../Data/Users.json')
const hallData = require('../Data/Halls.json');
const data = require('../Data/Admin.json')
const dotenv =require('dotenv');
const ConnectDB = require('../Config/database')
dotenv.config({path:'BackEnd/Config/config.env'});

ConnectDB();

const InsertUsers = async () => {
     try{
            // await admin.insertMany(data)
            // console.log("success")
            // process.exit();
            // await halls.deleteMany();
            // await halls.insertMany(hallData)
             const halldetail= await halls.findOne({HallName:"Lee Meridian"});
             const hallid = halldetail._id;
            
            //  console.log(hallid);
//Insert Data and Add Other Docunebt ID    
await booking.deleteMany();
            await booking.insertMany([{
            "Name" : "Sasuke",
            "Email" :"Sasuke@gmail.com",
            "Mobile" : "+940757340897",
            "HallID" : hallid,
            "Date" : "2023-06-19"
        },
        {
            "Name" : "Kakashi",
            "Email" :"Kakashi@gmail.com",
            "Mobile" : "+940757340891",
            "HallID" : hallid,
            "Date" : "2023-06-12"
        },
        {
            "Name" : "Jiraya",
            "Email" :"Jiraya@gmail.com",
            "Mobile" : "+940757340890",
            "HallID" : hallid,
            "Date" : "2023-06-13"
        },
        {
            "Name" : "Tsunade",
            "Email" :"Tsunade@gmail.com",
            "Mobile" : "+940757340895",
            "HallID" : hallid,
            "Date" : "2023-06-14"
        }]);
            // await booking.insertMany(data);
             console.log("success")
           
            
//Find Document USing ID
            //  const data = await booking.find({HallID : hallid});
            //  console.log(data)


              process.exit();

     }catch(err){

        console.log(err);
    }
}

InsertUsers();


    