const { Timestamp } = require('bson')
const asyncHandler = require('express-async-handler')

const Patient = require("../model/patientModel.js")

// @desc  get all patients
// @route POST emr/api/patients/getAll
// access Private
const getAllPatients = asyncHandler(async (req, res) => {
  const patient = await Patient.find()

  res.status(200).json(patient)
  // res.status(200).json({message: "all patients"})
})

// @desc  create all patients
// @route POST emr/api/patients/create
// access Private
const createPatient = asyncHandler(async (req, res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error('name is required')
  }
  if(!req.body.b_day){
    res.status(400)
    throw new Error('b_day is required')
  }
  if(!req.body.sex){
    res.status(400)
    throw new Error('sex is required')
  }
  if(!req.body.email){
    res.status(400)
    throw new Error('email is required')
  }
  if(!req.body.password){
    res.status(400)
    throw new Error('password is required')
  }
  const patient = await Patient.create({
    name: req.body.name,
    sex: req.body.sex,
    b_day: req.body.b_day,
    emergency_name: req.body.emergency_name,
    emergency_no: req.body.emergency_no,
    email: req.body.email,
    password: req.body.password,
  })
  res.status(200).json(patient)
})

// @desc  update patients
// @route POST emr/api/patients/create
// access Private
const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  
  if(!patient){
    res.status(400)
    throw new Error("Patient not found")
  }

  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body,  {new:true})
  
  res.status(200).json(updated)
})
// @desc  delete patients
// @route POST emr/api/patients/create
// access Private
const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  
  if(!patient){
    res.status(400)
    throw new Error("Patient not found")
  }

  const deleted = await Patient.findByIdAndRemove(req.params.id)
  
  res.status(200).json(deleted)
})

module.exports = {getAllPatients, createPatient, updatePatient, deletePatient}