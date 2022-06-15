const path = require('path')
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 8000
const {errorHandler } = require("./middleware/errorMiddleware.js")
const connectDB = require("./config/db.js")
const cors = require('cors');
const { rmSync } = require('fs')

connectDB()

const app = express()

const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/emr/api/patients', require('./routes/patientRoutes.js'))
app.use('/emr/api/doctors', require('./routes/doctorRoutes.js'))
app.use('/emr/api/diagnosis', require('./routes/diagnosisRoutes.js'))


// Serve frontend
if(process.env.NODE_ENV=== 'production'){
  app.use(express.static(path.join(__dirname,"../frontend/build")))
  app.get("*", (req, res)=>res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html' )))
} else {
  app.get("/", (req, res)=>{res.send("Please set to production")})
}

app.use(errorHandler)



app.listen(port, ()=>{console.log(`listening to port ${port}`)})
