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
  timestamps: true,
})

// var handleE11000 = function(error, res, next) {
//   if (error.name === 'MongoError' && error.code === 11000) {
//     next(new Error('There was a duplicate key error'));
//   } else {
//     next();
//   }
// };

// patientSchema.post('save', handleE11000);
// patientSchema.post('update', handleE11000);
// patientSchema.post('create', handleE11000);
// patientSchema.post('findOneAndUpdate', handleE11000);
// patientSchema.post('insertMany', handleE11000);

module.exports = mongoose.model('Patient', patientSchema)