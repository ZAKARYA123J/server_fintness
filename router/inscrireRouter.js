const express=require('express')
const router=express.Router()
const inscrireController=require('../controller/inscrireController')
router.post('/',inscrireController.createInscrire)
router.get('/',inscrireController.getAllInscrire)
module.exports=router