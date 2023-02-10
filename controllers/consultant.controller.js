const ConsultantInfo =require("../modules/consultantInfo");
const Users = require("../modules/users");
exports.getConsultantInfo=async(req,res,next)=>{
    try{
        const userEmail = req?.query?.email
        const query = { email: userEmail };
        // const consultant = await Users.findOne(query)
        const consultantAll= await ConsultantInfo.find(query)
        // const result = await consultantAll?.toArray();
        // console.log(result);
        // console.log(userEmail,query)
        res.status(200).json({
          status:"success",
          message:"Consultant information is  found successfully",
          data:consultantAll,
          // allData:consultantAll
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
exports.saveConsultantInfo=async(req,res,next)=>{
    try{
      
        const consultant =new ConsultantInfo(req.body);
        const result = await consultant.save()
        console.log(consultant)
        res.status(200).json({
            status:"success",
            message:"Consultant info saved successfully",
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