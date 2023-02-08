const mongoose = require('mongoose');
const usersSchema =mongoose.Schema({
    userName:{
      type:String,
      require:true,
      unique: [true, "Please set a unique name"],
      trim: true,
    },
    email:{
      type:String,
      require:true,
      unique: [true, "Please set a unique name"],
      trim: true,
    },
    password:{
      type:String || Number,
      require:true,
  
    }
  
  })
  
  const Users = mongoose.model("Users", usersSchema);

  module.exports = Users;

