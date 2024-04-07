function conection() {

   const mongoose = require('mongoose');
   mongoose.connect('mongodb+srv://ROBOTEZOR:<rodo1234>@cluster1.anbhp2i.mongodb.net/MiniExam', {});

   mongoose.connection.on('connected', () => {
       console.log('connect');
   });

   mongoose.connection.on('error', (err) => {
       console.error('error', err);
   });
}

module.exports = { conection };