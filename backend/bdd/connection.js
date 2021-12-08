const mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
/*const dbName = "entrees";
const dbUrl = `mongodb://localhost:3000/${entrees}`;
*/
const connectbdd = async() =>{
    await


mongoose.connect("mongodb+srv://theo:syrXix-qodhyh-7hobpe@cluster0.ol5vc.mongodb.net/BDD-Annee?retryWrites=true&w=majority",
{
  useunifiedTopology : true,  
  useNewUrlParser: true
  
})
console.log("connect");
};

module.exports= connectbdd;