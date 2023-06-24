const userModel = require("../models/UserModel");
const adminModel = require("../models/AdminModel");
const hallModel = require("../models/HallsModel")
const bookingModel = require('../models/BookingModel');
const bcrypt = require("bcrypt");




exports.AdminLogin = async (req,res,next) => {
    try {
        const { Email, Password } = req.body;
        const admin = await  adminModel.findOne({ Email });
        const token = admin.getJWTToken();

        if (!admin) {
            return (
                res.status(400).json({
                    success: "False",
                    message: "Invalid UserName or Password"
                })
            )
        }

        const isMatch = await bcrypt.compare(Password, admin.Password);

        if (!isMatch) {
            return (
                res.status(400).json({
                    success: "False",
                    message: "Invalid UserName or Password"
                })
            )
        }

        if (admin && isMatch) {
            return (
            res.status(200).json({
                success: "true",
                token 
                
            })
        )
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }


}

exports.registerAdmin = async (req, res, next) => {
    try {
        const { Name, Email,  Password } = req.body;
        const rondom = await bcrypt.genSalt();
        const PasswordHash = await bcrypt.hash(Password, rondom);

        const admin = await adminModel.create({
            Name,
            Email,
            Password: PasswordHash,
        });
      
            
        
        const token = admin.getJWTToken();
        await res.status(201).json({
            success: "true",
            admin ,
            token //For Testing purpose 
           
        })
       

    } catch (err) {
        res.status(500).json({ error: "OOOOPS!! Something Went Wrong ... Please Try Again Later !" })
    }


}

exports.AdminLogOut =  (req, res, next) => {

    res.status(200).json({
        success :true
    }).redirect('/login')

}


// exports.Cookie =(req,res) =>{
//     res.setHeader('Set-Cookie', `token=${token}; Path=/; Expires=Wed, 21 Oct 2023 07:28:00 GMT; HttpOnly`);
//     res.send('Cookie set successfully');
//     console.log("dfhd");
// }

exports.AdminForgotPassword =  (req, res, next) => {

    

    res.status(200).json({
        success :true
    }).redirect('/login')

}
