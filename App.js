const express = require('express');
const app =  express();
const cors = require('cors')
const cookieParcer = require('cookie-parser')

app.use(cors({}));
app.use(cookieParcer());
const usersRoute= require('./Routes/UserRoute');
const adminRoute = require("./Routes/AdminRoute");
app.use(express.json());
app.use('/api/user/auth/',usersRoute);
app.use('/admin/',adminRoute);




module.exports =app;