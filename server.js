// Import express
let express = require('express');

// Inititialize the app
let app  = express();

// importer le fichier contenant les routes dans le server
let router = require('./routes');
app.use('/', router);


app.use(express.urlencoded({extended:true}))

// Set route / Send message for default URL
// app.get('/', (req, res) => {
//   res.render('register.ejs');
//}); 

//app.post('/' , (req, res) =>{
  //  console.log(req.body)
    //res.send("Hello " + req.body.name);
//});
//using url query
// app.get('/index',(req, res) =>{
//    res.send("bonjour " + req.query.name);
//   res.render('register.ejs' , {name: req.query.name});
// })

// using parameters
//app.get('/index/:name',(req, res) =>{
  //  res.send("bonjour " + req.params.name);
  //  res.render('home.ejs' , {name: req.params.name});
//})

// Session = définit la session privée (permet de rester sur les pages de ma session)
var session = require('express-session');

app.use(session({
    secret : 'my secret',
    resave : false,
    saveUninitialized : false
})
);
// Cookie
var cookieParser = require ('cookie-Parser')
app.use(cookieParser())
app.use(cookieParser());

// Configure bodyparser to handle POST requests
let bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// setting middleware
app.use(express.static('images public'));

// Datebase connection
var mysql = require("mysql")
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users'
});
 connection.connect(function(error) { if (error) console.log(error);});
 
// Launch server
var port = 8000
app.listen(port, function () 
{ console.log('Running server on port ' + port); })
