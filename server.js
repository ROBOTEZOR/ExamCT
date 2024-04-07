const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const db = require('./db/db');
const cookieParser = require('cookie-parser');
const loginRoutes = require('./routes/loginRoutes');
const signinRoutes = require('./routes/signinRoutes')

db.conection();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.engine(
    'handlebars',
    exphbs.engine({ extname: '.hbs', defaultLayout: 'index' })
);

app.set('view engine', '.hbs');

app.get('/', async (req, res) => {
    res.render('index');
});

app.use('/', signinRoutes);
app.use('/', loginRoutes);

app.listen(3000, () => {
   console.log("server run");
});
























//app.post('/', (req, res) =>  {
//createUser.createUser(req.body.username, req.body.email, req.body.age);
//});

//app.get('/signin', (req, res) =>{
//res.render('signin');
//})

//app.get ('/login', (req, res) => {
//   res.render('login');
//});


//app.post('/signin', (req, res) => {
//   createUser.createUser(
//      req.body.username,
//      req.body.password,
//      req.body.email,
//      req.body.age
//   );
//});

//app.post('/login', async(req, res) => {
//   const {username, password} = req.body;
//   const user = await User.findone ({username});
//   if (!user) {
//      return res.status(404).send('UserNotFound');
//   }
//   const validPassword = await bcrypt.compare(password, user.password);
//   if(!validPassword){
//      return res.status(401).send('Invalid password'); 
//   }
//   const token =jwt.sign({userId: user._id}, 'secretkey');
//   res.status(200).json({token});
//});

