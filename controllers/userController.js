const User = require ('../models/userModels');
const bcrypt = require('bryptjs');
async function createUser(username, password, email, age) {
   try{
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User ({
         username: username,
         password: hashedPassword,
         email: email,
         age: age,
      });

      await newUser.save();
      console.log ('User succesfuly created');
   }
   catch (error) {
      console.error('User creation error');
   }
}

module.exports = {
   createUser,
};