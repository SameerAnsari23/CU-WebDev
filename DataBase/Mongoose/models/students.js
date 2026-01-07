const mongoose = require('mongoose');
const { Schema } = mongoose;

const students = new Schema({
  name: {
   type : String,
   required : true
  },
  age: {
   type : Number,
   required : true
  },
  marks: {
   type : Number,
   required : true
  }
  
 });

module.exports = mongoose.model('students', students);