const {Salle}=require('../models')


const createsalle=async(req,res)=>{
    const {nom,adress,codepostal,ville}=req.body
    try{
        const salle=await Salle.create({
            NomS:nom,
            AdresseS:adress,
            CodePostalS:codepostal,
            VilleS:ville
        })
        res.status(200).json({message:"salle create succes",salle})
    }catch(error){
        console.log('error')
        res.status(404).json({error:"error"})
    }
}
module.exports={createsalle}