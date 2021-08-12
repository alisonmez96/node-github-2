// Get an instance of the express Router and set routes
let express = require('express'); // require renvoit à une bibliothéque node.js
let router = express.Router();   



// Set route / Send message for default URL
router.get('/', (req, res) => {
    res.render('home.ejs');
});

// Redirection vers la home page
//router.get('/nimportequoi' , (req,res)=> res.redirect ('/'));

    // Set route / Send message for default URL
 router.get('/register', (req, res) => {
    res.render('register.ejs');
 });

router.get('/user', (req,res) => {
    console.log('userlistpage');
    res.render('userlist.js');
 });

 // Import contact controller
 let UserController = require('./controllers/UserController');

 //router.get('/user' , UserController.userlist);
 router.get('/user/add', UserController.userFormAdd);
 router.get('/user/show/:iduser' , UserController.userShow);
 router.post('/user/new', UserController.userNew);
 router.delete('/user/remove/:iduser' , UserController.userremove);
 router.get('/user/update/:iduser' , UserController.userupdate);

    module.exports = router;
