const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  displayName: String
});

// Create Users Collection
mongoose.model('users', userSchema);
