var mongoose = require('mongoose');

//Create a new schema
var HomeworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
  }
});

//Export the model schema
module.exports = mongoose.model('homework', HomeworkSchema);
