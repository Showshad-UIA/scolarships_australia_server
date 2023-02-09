const ConsultantInfo =require("../modules/consultantInfo")
exports.getConsultantInfo=async(req,res,next)=>{
    try{
        const email = req.query.email
        const query = { email: email };
        const consultant = await ConsultantInfo.find(query)
        const consultantAll= await ConsultantInfo.find({})
        // console.log(user)
        res.status(200).json({
          status:"success",
          message:"Consultant information is  found successfully",
          data:consultant,
          allData:consultantAll
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