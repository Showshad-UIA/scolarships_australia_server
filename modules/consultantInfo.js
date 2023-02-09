const mongoose = require('mongoose');

const consultantInfo=mongoose.Schema({
    profession:{
        type:String,
        trim:true
    },
    summery:{
        type:String,
        trim:true
    }
})

const ConsultantInfo=mongoose.model("consultantInfo",consultantInfo);

module.exports =ConsultantInfo;