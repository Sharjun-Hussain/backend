const userModel = require('../models/UserModel');
const bcrypt = require("bcrypt");


exports.registerUser = async (req, res, next) => {
    try {
        const { FirstName, LastName, Email, Mobile, Password, Password2, HallName, Capacity, amenities } = req.body;
        const rondom = await bcrypt.genSalt();
        const PasswordHash = await bcrypt.hash(Password, rondom);

        const users = await userModel.create({
            FirstName,
            LastName,
            Email,
            Mobile,
            Password: PasswordHash,
            Password2: PasswordHash,
            HallName,
            Capacity,
            amenities
        });


        await res.status(201).json({
            success: "true",
            users  //For Testing purpose 
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }


}

exports.loginUser = async (req, res, next) => {

    try {
        const { Email, Password } = req.body;

        const user = await userModel.findOne({ Email });

        if (!user) {
            return (
                res.status(400).json({
                    success: "False",
                    message: "Invalid UserName or Password"
                })
            )
        }

        const isMatch = bcrypt.compare(Password, user.Password);

        if (!isMatch) {
            return (
                res.status(400).json({
                    success: "False",
                    message: "Invalid UserName or Password"
                })
            )
        }


        if (user && isMatch) {
            return (
                res.status(200).json({
                    success: "true"
                })
            )
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }



}