const express =  require('express');
const chalk = require('chalk');
const Product = require('./models/product');
const userRouter = require('./routers/product');

require('./db/mongoose');

const PORT = 3000;
const app = express();
app.use(express.json());
const router = new express.Router();
app.use(userRouter);


app.listen(PORT, ()=>{
 console.log(chalk.bgGreen(`Server listening on port ${PORT}`));
});