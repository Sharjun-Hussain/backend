const userModel = require("../models/UserModel");
const adminModel = require("../models/AdminModel");
const hallModel = require("../models/HallsModel")
const bookingModel = require('../models/BookingModel');
const Hall = require("../models/HallsModel");
const contactmodel = require('../models/ContactModel')

exports.ReceiveContactForm = async (req,res,next) =>{
   
   const Halls =  await contactmodel.insertMany({})
   res.status(200).json({
    success : true,
    Halls
   })
}

exports.ListAllHall = async (req,res,next) =>{
   
   const Halls =  await hallModel.find();
   res.status(200).json({
    success : true,
    Halls
   })
}


exports.AddHall = async (req,res,next) =>{
   const {HallName , Location, Price , amenities ,Capacity} =req.body;
 hallModel.insertMany({HallName: HallName,
    Location: Location,
      Capacity:Capacity,
      Price : Price,
      amenities: amenities

   })
   res.status(200).json({
      success: true
   })

 }

 exports.RemoveHall = async (req,res,next) =>{
   

   res.status(200).json({
      success: true
   })

 }

 exports.UpdateHall = async (req,res,next) =>{
   

   res.status(200).json({
      success: true
   })

 }

