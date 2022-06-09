const express = require("express")
const router = express.Router()
const {createDoctor, getDoctor, loginDoctor, getAllDoctor} = require('../controller/doctorController.js')


router.post('/login', loginDoctor)
router.post('/get/:id', getDoctor)
router.post('/create', createDoctor)
router.post('/getAll', getAllDoctor)



module.exports  = router