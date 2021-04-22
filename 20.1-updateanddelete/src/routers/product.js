const express =  require('express');
const router = new express.Router();
const Product = require('../models/product');

router.post('/add/', async (req, res)=>{
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

router.get('/allproducts/', async (req, res)=>{
 try{
  const allProducts = await Product.find({})
   res.status(200).send(allProducts);   
  
 }catch(err){
  console.log('could not find any records');
  res.status(400).send({err});
 }
})

router.get('/allproducts/:name', async (req, res)=>{
 console.log('40: ', req.params, 'this is from Get one record');
 try{
  const aProduct = await Product.findOne({name: req.params.name});
  res.status(200).send(aProduct);
 }catch(err){
  console.log('could not find any records');
  res.status(400).send({err});
 }
})//findOne product

router.get('/activeproducts/', async (req, res)=>{
 console.log('56: ', req.params, 'this is from Get one record');
 try{
  const activeProducts = await Product.find({isActive: true});
  res.status(200).send(activeProducts);  
 }catch(err){
  console.log('could not find any records');
  res.status(400).send({err});
 }
})//find active products

router.get('/pricerange/:low/:high', async (req, res)=>{
 console.log('72 Between', req.params);
 const low = req.params.low;
 const high = req.params.high;
 try{
  const priceRange = await Product.find({"details.price": {$gte: low, $lte: high}});
  res.status(200).send(priceRange);   
 }catch(err){console.log(err, 'filtering by price range')}
})//find products in price range

router.patch('/update/:id', async (req, res)=>{
 const id=  req.params.id;
 const updates = Object.keys(req.body);
 const allowedUpdates = ['name', 'details.discount', 'details.price', 'isActive', 'details.description'];
 isValidOp = updates.every((update)=>{  return allowedUpdates.includes(update); })
 if(!isValidOp){
  return res.status(400).send({error: 'Invalid updates'});
 }
 try{
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
  if(!product){
   return res.status(404).send();
  }
  res.send(product);
 }catch(error){console.log('error', error)}
})

router.delete('/delete/:id', async (req, res)=>{
 const id = req.params.id;
 try{
  const product = await Product.findByIdAndDelete(id);
  if(!product){
   return res.status(404).send();
  }
  res.send(product);
 }catch(error){console.log('error: ', error)}
})

router.delete('/deleteall/', async (req, res)=>{
  try{
    const deleteAll = await Product.deleteMany({});    
    res.send(deleteAll);
  }catch(error){console.log('error delating all records: ', error)}
})


module.exports = router;