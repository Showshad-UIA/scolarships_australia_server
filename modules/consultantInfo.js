const mongoose = require('mongoose');
// const email=req.query.email

const consultantInfo=mongoose.Schema({
    
    profession:{
        type:String,
        trim:true
    },
    summery:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    }
})

const ConsultantInfo=mongoose.model("consultantInfo",consultantInfo);

module.exports =ConsultantInfo;