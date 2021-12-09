var express = require('express');
const _ = require('lodash');

const Année = require('../bdd/AnneeSchema');
var router = express.Router();
const cors = require('cors');
//const axios = require('axios');
const app = express();
router.use(express.json());

router.use(cors());

//const mongoose = require("mongoose");

const AnneeModel = require("../bdd/AnneeSchema");

// read all
router.get('/',async (req,res)=> {
  AnneeModel
    .find({})
    .exec (function (err,data){
      if (err) return console.error(err);
      res.status(200).json(data);
    })
});

// read par annee
router.get('/:id',async (req,res)=> {
  const {id} = req.params;
  AnneeModel
    .findOne({NbAnnee:id})
    .exec (function (err,data){
      if(err) return console.error(err);
      // console.log("the number of entry is %s",data.NbTotEntrees);
      res.status(200).json(data);
    })
});

// delete par annee
router.delete('/:id',async (req,res)=> {
  const {id} = req.params;
  AnneeModel
    .deleteOne({NbAnnee:id})
    .exec (function (err,data){
      if(err) return console.error(err);
      // console.log("the number of entry is %s",data.NbTotEntrees);
      res.status(200).json({"deletedId":id });
    })
});

/* create  annee
router.put('/create',async (req,res)=> {
  
  const {data} = req.body;
  console.log( "body : " + data);
  AnneeModel
    .create(data
    , function (err,data){
      if(err) return console.error(err);
      // console.log("the number of entry is %s",data.NbTotEntrees);
      res.status(200).json({"added": data });
    })
});
*/

// post annee
router.post('/insert',async (req,res)=>{
  const NbAnnee=req.body.NbAnnee
  const NbTotEntrees=req.body.NbTotEntrees

  const Année = new AnneeModel({NbAnnee: NbAnnee, NbTotEntrees: NbTotEntrees});

  try {
    await Année.save();
    res.send("inserted data")
  }  catch (err){
    console.log(err);
  }


});



router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


module.exports = router;