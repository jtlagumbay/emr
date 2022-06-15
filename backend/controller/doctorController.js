const { Timestamp } = require('bson')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Doctor = require('../model/doctorModel.js')

// @desc  create doctor
// @route POST emr/api/doctors/create
// access Private
const createDoctor = asyncHandler(async (req, res) => {
  const {name, specialization, username, password} = req.body
  if(!name){
    res.status(400)
    throw new Error('name is required')
  }
  if(!specialization){
    res.status(400)
    throw new Error('specialization is required')
  }
  if(!username){
    res.status(400)
    throw new Error('username is required')
  }
  if(!password){
    res.status(400)
    throw new Error('password is required')
  }

  // Check if doctor already exists
  const doctorExists = await Doctor.findOne({username})
  if(doctorExists){
    res.status(400)
    throw new Error('doctor already exists ')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const doctor = await Doctor.create({
    name: name,
    specialization: specialization,
    username: username,
    password: hashedPassword,
  })

  if(doctor){
    res.status(201).json({
      message:"doctor sucessfully created",
      _id:doctor._id,
      name:doctor.name,
      username:doctor.username
    })
  } else {
    res.status(400)
    throw new Error('invalid doctor data')
  }

})

// @desc  get doctor
// @route POST emr/api/doctors/get
// access Private
const getDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)
  
  if(!doctor){
    res.status(400)
    throw new Error("doctor not found")
  }


  res.status(200).json({ 
    _id: doctor._id,
    name: doctor.name,
    specialization: doctor.specialization
  })
})
// @desc  get all doctor
// @route POST emr/api/doctors/getAll
// access Private
const getAllDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.find() 
  
  res.status(200).json(doctor)
})

// @desc  login doctor
// @route POST emr/api/doctors/login
// access Public
const loginDoctor = asyncHandler(async (req, res) => {
  const {username, password} = req.body

  if(!username){
    res.status(400)
    throw new Error("Username is required.")
  }
  if(!password){
    res.status(400)
    throw new Error("Password is required.")
  }

  const doctor = await Doctor.findOne({username: username})
  if(doctor && (bcrypt.compareSync(password, doctor.password))){
    res.status(200).json({
      message: "Login successful.",
      data:{doctor}
    })
  } else {
    res.status(400)
    throw new Error("Error! Invalid credentials.")
  }

})

module.exports = {createDoctor, getDoctor, loginDoctor, getAllDoctor}