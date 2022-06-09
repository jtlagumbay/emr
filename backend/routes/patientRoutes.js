const express = require("express")
const router = express.Router()
const {getAllPatients, createPatient, updatePatient, deletePatient, loginPatient, getPatient} = require('../controller/patientController')
// const {protect} = require('../middleware/authMiddleware.js')


router.post('/login', loginPatient)
router.get('/getAll', getAllPatients)
router.post('/get/:id', getPatient)
router.post('/create', createPatient)
router.post('/update/:id', updatePatient)
router.post('/delete/:id', deletePatient)

// router.post('/getAll', (req, res)=>{
//   res.status(200).json({message:"get all patients"})
// })
// router.post('/get/:id', (req, res)=>{
//   res.status(200).json({message:`get patient id ${req.params.id}`})
// })
// router.post('/update/:id', (req, res)=>{
//   res.status(200).json({message:`update patient id ${req.params.id}`})
// })
// router.post('/delete/:id', (req, res)=>{
//   res.status(200).json({message:`delete patient id ${req.params.id}`})
// })

module.exports  = router