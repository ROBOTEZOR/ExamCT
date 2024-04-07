const mongoose = require('mongoose');
const userSchema = new mongooseSchema({
   username: {type:String, required:true},
   email: {type:String, required:true},
   password: {type:String, required:true},
   age: Number,
});


const User = mongoose.model('User', userSchema);
module.exports = User;