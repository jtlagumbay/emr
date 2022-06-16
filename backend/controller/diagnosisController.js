const { Timestamp } = require('bson')
const asyncHandler = require('express-async-handler')

const Diagnosis = require('../model/diagnosisModel.js')

// @desc  create all diagnosis
// @route POST emr/api/diagnosis/create
// access Private
const createDiagnosis = asyncHandler(async (req, res) => {
  const {patient_id, doctor_id, diagnosis, prescription } = req.body

  if(!patient_id){
    res.status(400)
    throw new Error("patient id required")
  }
  if(!doctor_id){
    res.status(400)
    throw new Error("doctor id required")
  }
  if(!diagnosis){
    res.status(400)
    throw new Error("diagnosis required")
  }
  if(!prescription){
    res.status(400)
    throw new Error("prescription required")
  }

  const newDiagnosis = await Diagnosis.create({
   patient_id: patient_id,
   doctor_id: doctor_id,
   diagnosis: diagnosis,
   prescription: prescription,
  })

  res.status(200).json({
    message:"Diagnosis saved successfully."
  })
})

// @desc  get all diagnosis
// @route POST emr/api/diagnosis/getAll
// access Private
const getAllDiagnosis = asyncHandler(async (req, res) => {
  const diagnosis = await Diagnosis.find()
  
  if(!diagnosis){
    res.status(400)
    throw new Error("Diagnosis not found")
  }


  res.status(200).json(diagnosis)
})
// @desc  get diagnosis
// @route POST emr/api/diagnosis/get/:id
// access Private
const getDiagnosis = asyncHandler(async (req, res) => {
  const diagnosis = await Diagnosis.findById(req.params.id)
  
  if(!diagnosis){
    res.status(400)
    throw new Error("Diagnosis not found")
  }


  res.status(200).json({ 
    _id: diagnosis._id,
    patient_id: diagnosis.patient_id,
    doctor_id:diagnosis.doctor_id,
    diagnosis:diagnosis.diagnosis,
    prescription:diagnosis.prescription,
  })
})
// @desc  get diagnosis
// @route POST emr/api/diagnosis/get/:id
// access Private
const getDiagnosisPerPatient = asyncHandler(async (req, res) => {
  const diagnosis = await Diagnosis.find({patient_id:req.params.id})
  
  if(!diagnosis){
    res.status(400)
    throw new Error("diagnosis not found")
  }


  res.status(200).json(diagnosis)
})


module.exports = {createDiagnosis, getDiagnosis, getDiagnosisPerPatient, getAllDiagnosis}