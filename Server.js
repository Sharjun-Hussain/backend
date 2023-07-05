const app = require('./App');
const dotenv = require('dotenv');
const path= require('path');
const ConnectDB = require('./Config/database');
const mongoose = require ('mongoose')

dotenv.config({path:path.join(__dirname,"Config/config.env")})
ConnectDB()
app.listen(process.env.PORT, ()=>(
    console.log(`server run in :  ${process.env.PORT} `)
));