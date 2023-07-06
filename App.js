const express = require('express');
const app =  express();
const cors = require('cors')
const cookieParcer = require('cookie-parser')
const path =require("path");

app.use(cors({}));
app.use(cookieParcer());
const usersRoute= require('./Routes/UserRoute');
const adminRoute = require("./Routes/AdminRoute");
app.use(express.json());
app.use('/api/user/auth/',usersRoute);
app.use('/admin/',adminRoute);

app.use(express.static(path.join(__dirname,'../FrontEnd/eventspot/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../FrontEnd/eventspot/build/index.html'));
})


module.exports =app;