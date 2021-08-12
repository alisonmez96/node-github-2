class User { // modèle importé dans userController
    idUSERS = "";
   Firstnamename ="";
   Lastname ="";
   // Email ="";
   // Password = "";
   constructor(idUSERS,Firstname,Lastname,Email,Password)
   {
       // this.idUSERS = idUSERS;
       this.Firstname = Firstname;
       this.Lastname = Lastname;
       // this.Email = Email;
       // this.Password = Password;
   }
   
};

module.exports = User;