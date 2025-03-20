
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Message text is required'],
    trim: true,
    maxlength: [500, 'Message cannot be more than 500 characters']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);
