const express =  require('express');
const chalk = require('chalk');
const Product = require('./models/product');
const mongoose = require('mongoose');
require('./db/mongoose');

const PORT = 3000;
const app = express();
app.use(express.json());

app.post('/add/', async (req, res)=>{
 console.log('req.body',req.body,'this is from Post to create new record');
 const newProduct = new Product(req.body); 
 try{
  await newProduct.save();
  res.status(201).send(newProduct); //status 201 means successfully created an object by default 
 }catch(error){
  console.log('could not create new record');
  res.status(400).send({error});
 }
})//post

app.get('/allproducts/', (req, res)=>{
 try{
  Product.find({},(err, result)=>{
  if(err){
   console.log('26 error', err);
  }else{
    console.log('28 :', result);
    res.status(200).send(result);
   }
  })
 }catch(err){
  console.log('could not find any records');
  res.status(400).send({err});
 }
})

app.get('/allproducts/:name', (req, res)=>{
 console.log('40: ', req.params, 'this is from Get one record');
 try{
  Product.findOne({name: req.params.name},(err, result)=>{   
  if(err){
   console.log('error finding product', err);
  }else{
    res.status(200).send(result);
   }
  })
 }catch(err){
  console.log('could not find any records');
  res.status(400).send({err});
 }
})//findOne product

app.get('/activeproducts/', (req, res)=>{
 console.log('56: ', req.params, 'this is from Get one record');
 try{
  Product.find({isActive: true},(err, result)=>{   
  if(err){
   console.log('error finding active product', err);
  }else{
    res.status(200).send(result);
   }
  })
 }catch(err){
  console.log('could not find any records');
  res.status(400).send({err});
 }
})//find active products

app.get('/pricerange/:low/:high',(req, res)=>{
 console.log('72 Between', req.params);
 const low = req.params.low;
 const high = req.params.high;
 try{
  Product.find({"details.price": {$gte: low, $lte: high}},(error, result)=>{
   if(err){
    console.log('error find range');
   }else{
    console.log('77 range: ',result);
    res.status(200).send(result);
   }
   
  })
 }catch(err){console.log(err, 'filtering by price range')}
})//find products in price range


app.listen(PORT, ()=>{
 console.log(chalk.bgGreen(`Server listening on port ${PORT}`));
});