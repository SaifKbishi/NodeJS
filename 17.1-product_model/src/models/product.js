const mongoose = require('mongoose')
const validator = require('validator')

const Product = mongoose.model('product',{
 name:{
  type: String,
  required: true,
  trim: true,
  unique: true
 },
 category:{
  type: String,
  required: true,
  trim: true
 },
 isActive:{
  type: Boolean,
 },
 details:{
  description:{
   type: String,
   required: true,
   min:10
  },
  price:{
   type: Number,
   required: true,
   min: 0
  },
  discount:{
   type: Number,
   default:0
  },
  images:{
   type: [String ],
   validate: {
    validator: function(arr) {
      return arr.length >= 2;
    },
    message: "You must ad at least 2 images"
   }
  },
  phone:{
   type: String,
   validate(value){
    if (!validator.isMobilePhone(value, "he-IL")) {
      throw new Error("phone number most be a valid isrealy phone number");
    }
   },
  },
  DateAdd:{
   type: Date,
   default: Date.now
  },
 }//details  
})//Product

module.exports = Product;