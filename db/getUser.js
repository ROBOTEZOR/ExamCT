const User = require('../models/userModels');

async function getAllUsers(){
   try{
      const users = await User.find();
      return;users
   } catch (error) {
      console.error('Error while getting users:', error);
      throw error;
   }
}

module.exports =  {
   getAllUsers,
}