const {Admin} =require('../models')

const creareAdmin=async(req,res)=>{
    const {username,password,email}=req.body
    try{
        const admin=await Admin.create({username,password,email})
        res.status(200).json({message:"admin create succes",admin})
    }catch(error){
        res.status(500).json({error:"eror",error})
    }
}
module.exports={creareAdmin}