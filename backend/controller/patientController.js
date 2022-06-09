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
    emergency_name: patient.emergency_name,
    emergency_no: patient.emergency_no
  })
})
// @desc  create all patients
// @route POST emr/api/patients/create
// access Private
const createPatient = asyncHandler(async (req, res) => {
  const {name, b_day, sex, email, password, emergency_name, emergency_no} = req.body
  if(!name){
    res.status(400)
    throw new Error('name is required')
  }
  if(!b_day){
    res.status(400)
    throw new Error('b_day is required')
  }
  if(!sex){
    res.status(400)
    throw new Error('sex is required')
  }
  if(!email){
    res.status(400)
    throw new Error('email is required')
  }
  if(!password){
    res.status(400)
    throw new Error('password is required')
  }

  // Check if patient already exists
  const patientExists = await Patient.findOne({email})
  if(patientExists){
    res.status(400)
    throw new Error('patient already exists ')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const patient = await Patient.create({
    name: name,
    sex: sex,
    b_day: b_day,
    emergency_name: emergency_name,
    emergency_no: emergency_no,
    email: email,
    password: hashedPassword,
  })

  if(patient){
    res.status(201).json({
      message:"patient sucessfully created",
      _id:patient._id,
      name:patient.name,
      email:patient.email
    })
  } else {
    res.status(400)
    throw new Error('invalid patient data')
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
    throw new Error("patient not found")
  }

  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body,  {new:true})
  
  res.status(200).json({ message: "patient updated successfully "})
})

// @desc  delete patients
// @route POST emr/api/patients/delete/:id
// access Private
const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  
  if(!patient){
    res.status(400)
    throw new Error("Patient not found")
  }

  patient.remove()  
  res.status(200).json({message: "patient deleted successfully"})
})

// @desc  login patient
// @route POST emr/api/patients/login
// access Public
const loginPatient = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  if(!email){
    res.status(400)
    throw new Error("email required")
  }
  if(!password){
    res.status(400)
    throw new Error("password required")
  }

  const patient = await Patient.findOne({email: email})
  if(patient && (bcrypt.compareSync(password, patient.password))){
    res.json({
      message: "patient login sucessful",
      _id:patient._id,
      name:patient.name,
      email:patient.email, 
      token: generateToken(patient._id)
    })
  } else {
    res.status(400)
    throw new Error("invalid credentials")
  }

})

module.exports = {getAllPatients, createPatient, updatePatient, deletePatient, loginPatient, getPatient}