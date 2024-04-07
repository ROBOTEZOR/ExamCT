const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const isAuth = require('../middleware/isAuthenticated')

router.get ('/login', (req, res) => {
   res.render('login');
});

router.post('/login', async(req, res) => {
   const {username, password} = req.body;
   const user = await User.findOne ({username});
   if (!user) {
      return res.status(404).send('UserNotFound');
   }
   const validPassword = await bcrypt.compare(password, user.password);
   if(!validPassword){
      return res.status(401).send('Invalid password'); 
   }
   const token = createAuthToken(user._id, user.username, user.email);
   req.cookie('authToken', token)
   res.status(200).json({token});
});

const checkAuth = async (req, res, next) => {
   try{
      const token = req.cookies.authToken;
      if (!decoded || !decoded.user.Id){
         return res.redirect ('/login')
      }

      const decoded = jwt.verify(token, 'secretkey');
      if (!decoded || !decoded.userId){
      return res.redirect('/login');
      }
      req.userId = decoded.userId;

      next();
   }
   catch (error) {
      console.error(error);
      return res.redirect('/login')
   }
};

router.get('/profile', isAuth, (req, res) => {
   res.render('profile');
})


const createAuthToken = (userId, username, email) => {
   return jwt.sign ({userId, username, email}, 'secretkey');
};

router.get ('/api/current_user', (req, res) => {
   const token = req.cookies.authToken;
   if(!token){
      return res.status(401).send('Unauthorized');
   }
   const decoded = jwt.verify(token, 'secretkey');
   const {userId, username, email } = decoded;
   res.json({userId, username, email})
})

module.exports = router;