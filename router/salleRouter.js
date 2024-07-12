const express=require('express')
const router=express.Router()
const salleController=require('../controller/salleController')

router.post('/',salleController.createsalle)
module.exports = router;