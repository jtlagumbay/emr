const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 8000
const {errorHandler } = require("./middleware/errorMiddleware.js")
const connectDB = require("./config/db.js")

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/emr/api/patients', require('./routes/patientRoutes.js'))
app.use(errorHandler)

app.listen(port, ()=>{console.log(`listening to port ${port}`)})
