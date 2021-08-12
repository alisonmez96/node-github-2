let User = require('../models/UserModel');

let userlist = [];
exports.userlist = function (req, res) {
     let user = new User(0 ,"Dupont","Paul");
     userlist.push(user);
    res.render('Userlist.ejs', {users : userlist});
};

exports.userFormAdd = function (req, res) {
    res.render('UserAdd.ejs' , {iduser:-1, Lastname: "",Firstname: ""});
}


exports.userNew = function (req, res) {
    let iduser = req.body.iduser;
    let Lastname = req.body.Lastname;
    let Firstname = req.body.Firstname;

    if ( iduser >= 0 ) {
            userlist[iduser]["Lastname"] = Lastname,
            userlist[iduser]["Fistname"] = Firstname
    }
    else {
        let user = new User(Lastname,Firstname);
        userlist.push(user);
    }



    res.redirect('/user');
}

exports.userShow = function (req,res){
 let iduser = req.params.iduser;
 res.send('Hello  ' + userlist[iduser]["Firstname"]);

}


exports.userremove = function (req, res){
    let iduser = req.params.iduser;
    userlist.splice(iduser,1);

    res.redirect('/user')
}

exports.userupdate = function (req, res) {
    let iduser = req.params.iduser;
    res.render('UserAdd.ejs' , {iduser:iduser ,Lastname: userlist[iduser]["Lastname"],Firstname:[iduser]["Fistname"]});
}