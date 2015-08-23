var mongoose = require('mongoose');

//Create a new schema
var TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

//Export the model schema
module.exports = mongoose.model('teacher', TeacherSchema);
