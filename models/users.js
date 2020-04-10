const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String, required: true, lowercase: true, unique: true},
  password: {type: String},
}, {
  timestamps: true
});

// Making sure the password isn't sent as a JSON
userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // hash password before sending it to database
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);