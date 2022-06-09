const express = require("express")
const router = express.Router()
const {createDiagnosis} = require('../controller/diagnosisController.js')

router.post('/create', createDiagnosis)


module.exports  = router