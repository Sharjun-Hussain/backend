const mongoose =require('mongoose');

const ConnectDB =  ()=>{
     mongoose.connect('mongodb://127.0.0.1:27017/eventspot', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((con)=>{
        console.log(`mongodb connected to ${con.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=ConnectDB;



// // mongoose.connect('mongodb://127.0.0.1:27017/eventspot', {

// mongodb+srv://Admin:Admin@cluster0.rjzjxp8.mongodb.net/eventdpot?retryWrites=true&w=majority


