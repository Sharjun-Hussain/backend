const jwt= require('jsonwebtoken');
const admin = require('../models/AdminModel')

try {
    exports.isAuthenticatedAdmin =(req,res,next) =>{
        const {token} = req.cookies;
    
        if (!token)  {
          return  res.status(200).json({
                message: "Login First to access the URI"
            })
        };
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        req.admin = admin.findById(decoded.id);
        next();
    }


    exports.isAuthenticatedUser = (req,res,next) =>{
        const {token } = req.cookies;

        if (!token) {

        }
    }
} catch (err) {
    res.status(500).json({ error: "OOOOPS!! Something Went Wrong ... Please Try Again Later !" })
}