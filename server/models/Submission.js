var mongoose = require('mongoose');

//Create a new schema
var SubmissionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  forHomework: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

//Export the model schema
module.exports = mongoose.model('submission', SubmissionSchema);
