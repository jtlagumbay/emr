const { Timestamp } = require('bson')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Patient = require("../model/patientModel.js")

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn:'1D'
  })
}


// @desc  get all patients
// @route POST emr/api/patients/getAll
// access Private
const getAllPatients = asyncHandler(async (req, res) => {
  const patient = await Patient.find()

  res.status(200).json(patient)
  // res.status(200).json({message: "all patients"})
})

// @desc  update patients
// @route POST emr/api/patients/update/:id
// access Private
const getPatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  
  if(!patient){
    res.status(400)
    throw new Error("patient not found")
  }


  res.status(200).json({ 
    _id: patient._id,
    name: patient.name,
    b_day: patient.b_day,
    sex: patient.sex,
    contact_no: patient.contact_no,
    emergency_name: patient.emergency_name,
    emergency_no: patient.emergency_no
  })
})
// @desc  create all patients
// @route POST emr/api/patients/create
// access Private
const createPatient = asyncHandler(async (req, res) => {
  const {name, b_day, sex, contact_no, username, password, emergency_name, emergency_no} = req.body
  if(!name){
    res.status(400)
    throw new Error('Name is required.')
  }
  if(!b_day){
    res.status(400)
    throw new Error('Birthday is required.')
  }
  if(!sex){
    res.status(400)
    throw new Error('Sex is required.')
  }
  // if(!contact_no){
  //   res.status(400)
  //   throw new Error('Contact number is required')
  // }
  if(!username){
    res.status(400)
    throw new Error('Username is required.')
  }
  if(!password){
    res.status(400)
    throw new Error('Password is required.')
  }

  // Check if patient already exists
  const patientExists = await Patient.findOne({username})
  if(patientExists){
    res.status(400)
    throw new Error('Patient username already exists.')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const patient = await Patient.create({
    name: name,
    sex: sex,
    b_day: b_day,
    contact_no: contact_no,
    emergency_name: emergency_name,
    emergency_no: emergency_no,
    username: username,
    password: hashedPassword,
  })

  if(patient){
    res.status(201).json({
      message:"Patient created successfully/",
      _id:patient._id,
      name:patient.name,
      username:patient.username
    })
  } else {
    res.status(400)
    throw new Error('Invalid patient data.')
  }

  // res.status(200).json({message: "patient created successfully"})
})

// @desc  update patients
// @route POST emr/api/patients/update/:id
// access Private
const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  
  if(!patient){
    res.status(400)
    throw new Error("Patient not found.")
  }

  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body,  {new:true})
  
  res.status(200).json({ message: "Patient updated successfully. "})
})

// @desc  delete patients
// @route POST emr/api/patients/delete/:id
// access Private
const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  
  if(!patient){
    res.status(400)
    throw new Error("Patient not found.")
  }

  patient.remove()  
  res.status(200).json({message: "Patient deleted successfully."})
})

// @desc  login patient
// @route POST emr/api/patients/login
// access Public
const loginPatient = asyncHandler(async (req, res) => {
  const {username, password} = req.body

  if(!username){
    res.status(400)
    throw new Error("Username is required.")
  }
  if(!password){
    res.status(400)
    throw new Error("Password is required.")
  }

  const patient = await Patient.findOne({username: username})
  if(patient && (bcrypt.compareSync(password, patient.password))){
    res.json({
      message: "Login successful.",
      data:patient
    })
  } else {
    res.status(400)
    throw new Error("Error! Invalid credentials.")
  }

})

module.exports = {getAllPatients, createPatient, updatePatient, deletePatient, loginPatient, getPatient}