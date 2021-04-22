const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce',{
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true, 
});

// const InsigniaTV32 = new Product({
//  name: 'Insignia 32" 720p HD LED TV',
//  category: 'TV',
//  isActive: true,
//  details:{
//   description: 'Smart TV from LENCO, with a spectacular 4K resolution.\nHas the advanced operating system Android TV 9.',
//   price: 1390,
//   discount: 0,
//   images:['screen.jpg', 'screen2.jpg', 'screen3.jpg'],
//   phone: '0526901487'
//  }
// })//InsigniaTV32

// const LogitechStereoSpeakers = new Product({
//  name: 'Logitech Z120 2.0 USB Stereo Speakers Retail',
//  category: 'Speakers',
//  isActive: true,
//  details:{
//   description: 'USB POWERED STEREO SPEAKERS\nThese compact speakers are conveniently powered by USB and simple to set up, making them easy to move from one room to another.',
//   price: 67,
//   discount: 0,
//   images:['https://ksp.co.il/site/siteUpload/12570-a.jpg', 'https://ksp.co.il/site/siteUpload/30106-c.jpg', 'screen3.jpg'],
//   phone: '0526901487'
//  }
// })//LogitechStereoSpeakers

// const LogitechZ130Speaker = new Product({
//  name: 'Logitech Z130 2.0 Speaker Retail',
//  category: 'Speakers',
//  isActive: true,
//  details:{
//   description: 'CLEAR STEREO SOUND WITH STRONG BASS FOR MUSIC AND MOVIES.\nThese stereo speakers deliver clear sound and provide extra bass to your audio experience. Easily access all controls on the right speaker..',
//   price: 1390,
//   discount: 0,
//   images:['https://ksp.co.il/site/siteUpload/22365-a.jpg', 'https://ksp.co.il/site/siteUpload/19675-b.jpg', 'https://ksp.co.il/site/siteUpload/15760-c.jpg'],
//   phone: '0526901487'
//  }
// })//LogitechZ130Speaker
  
// const saving = async (product)=>{
//  try{
//   const newProduct = await product.save();
//   console.log(newProduct);
//  }catch(error){console.log('error trying to work on collections', error)}
// }
// saving(LogitechStereoSpeakers);
// saving(LogitechZ130Speaker);

//node src/db/mongoose.js