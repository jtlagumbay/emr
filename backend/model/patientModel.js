const mongoose = require('mongoose')
const { stringify } = require('querystring')

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required:[true, 'name is required']
  },
  b_day: {
    type: String,
    required:[true, 'b_day is required']
  },
  sex: {
    type: String,
    enum: ['f', 'm', 'b'],
    required:[true, 'Sex is required']
  },
  contact_no: {
    type: String,
  },
  emergency_name: {
    type: String
  },
  emergency_no: {
    type: String
  },
  username: {
    type: String,
    required:[true, 'username is required'],
    unique: true
  },
  password: {
    type:String,
    required:[true, 'password is required']
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Patient', patientSchema)