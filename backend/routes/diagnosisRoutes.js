const express = require("express")
const router = express.Router()
const {createDiagnosis, getDiagnosis, getDiagnosisPerPatient, getAllDiagnosis} = require('../controller/diagnosisController.js')

router.post('/create', createDiagnosis)
router.post('/getAll', getAllDiagnosis)
router.post('/get/:id', getDiagnosis)
router.post('/getPerPatient/:id', getDiagnosisPerPatient)


module.exports  = router