const mongoose = require('mongoose')
const { stringify } = require('querystring')

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required:[true, 'name is required']
  },
  specialization: {
    type: String,
    required:[true, 'specialization is required']
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

module.exports = mongoose.model('Doctor', doctorSchema)