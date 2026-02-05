const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user_name: String,
  user_email: String,
  user_phone: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
