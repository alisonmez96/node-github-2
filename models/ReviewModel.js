 // création d'un objet 'review'

class Review { 
   
    idREVIEW ="";
    Content = "";
    Model ="";
    User ="";

    constructor(idREVIEW, Content, Model, User)
    {
        this.idREVIEW = idREVIEW;
        this.Content = Content;
        this.Model = Model;
        this.User = User; 

    }
    
};

module.exports = Review;