const express=require("express")
const app=express()
const port=3000
const cors=require('cors')

app.listen(port,()=>console.log('server runing'))
app.use(cors())