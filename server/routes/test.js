const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/', function(req,res){
  db.Test.find()
  .then(function(tests){
    res.json(tests);
  })
  .catch(function(err){
    res.send(err);
  })
})

router.post('/', function(req,res){
  db.Test.create(req.body)
  .then(function(newTest){
  res.status(201).json(newTest)
  })
  .catch(function(err){
    res.send(err)
  })
})

router.get('/:id', function(req,res){
  db.Test.findById(req.params.id)
  .then(function(foundTest){
    res.json(foundTest)
  })
  .catch(function(err){
    res.send(err);
  })
})

router.put('/:id',function(req,res){
  db.Test.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
})

router.delete('/:id',function(req,res){
  db.Test.remove({_id: req.params.id})
  .then(function(){
    res.json({message: 'yeah it got deleted, nice'})
  })
  .catch(function(err){
    res.send(err);
  })
})

module.exports = router
