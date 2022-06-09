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

  res.status(200).json(newDiagnosis)
})

// @desc  get diagnosis
// @route POST emr/api/diagnosis/get/:id
// access Private
const getDiagnosis = asyncHandler(async (req, res) => {
  const diagnosis = await Patient.findById(req.params.id)
  
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


module.exports = {createDiagnosis}