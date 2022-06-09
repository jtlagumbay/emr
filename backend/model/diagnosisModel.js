const mongoose = require('mongoose')
const { stringify } = require('querystring')


const diagnosisSchema = mongoose.Schema({
  patient_id: {
    type: String,
    required:[true, 'patient id is required']
  },
  doctor_id: {
    type: String,
    required:[true, 'doctor id is required']
  },
  diagnosis: {
    type: Array,
    required:[true, 'diagnosis is required']
  },
  prescription: {
    type: Array,
    required:[true, 'prescription is required']
  },
},{
  timestamps: true
})

module.exports = mongoose.model('Diagnosis', diagnosisSchema)