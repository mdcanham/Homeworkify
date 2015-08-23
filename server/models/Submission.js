var mongoose = require('mongoose');

//Create a new schema
var SubmissionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

//Export the model schema
module.exports = mongoose.model('submission', SubmissionSchema);
