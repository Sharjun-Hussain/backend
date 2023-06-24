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