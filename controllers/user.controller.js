const Users = require("../modules/users");

module.exports.getUsers =async(req, res, next) => {
  try{
    const email = req.query.email
    const query = { email: email };
    const user = await Users.find(query)
    const users= await Users.find({})
    // console.log(user)
    res.status(200).json({
      status:"success",
      message:"user found successfully",
      data:user,
      allData:users
    })
  }
  catch(error){
    res.status(400).json({
      status: "Failed",
      message: "data is not found",
      data: error.message,
    });
  }
}

module.exports.saveUsers = async(req, res,next) => {
  try{
    const user = new Users(req.body);
    const result = await user.save();
    res.status(200).json({
      status:"success",
      message:"user saved successfully",
      data:result
    })
  }catch(error){
    res.status(400).json({
      status: "Failed",
      message: "data not saved successfully",
      data: error.message,
    });
  }
}
