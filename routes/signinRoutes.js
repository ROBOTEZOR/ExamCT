const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const createUser = require('./controllers/userController');

   router.get('/signin', (req, res) =>{
      res.render('signin');
      })

      router.post('/signin', (req, res) => {
         createUser.createUser(
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.age
         );
      });

      module.exports = router;