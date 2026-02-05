const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  certificate: {
    data: Buffer,
    contentType: String,
    filename: String,
  },
  resume: {
    data: Buffer,
    contentType: String,
    filename: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);