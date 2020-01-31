const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  displayName: String,
  credits: { type: Number, default: 0 }
});

// Create Users Collection
mongoose.model('users', userSchema);
