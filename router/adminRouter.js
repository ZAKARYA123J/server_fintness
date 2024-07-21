const express=require('express')
const router=express.Router()
const adminController=require('../controller/AdminController')

router.post('/',adminController.creareAdmin)

module.exports=router