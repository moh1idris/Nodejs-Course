//--> Here we will dynamically add all the values to the dataBase

require('dotenv').config()
//--> since we have to connect the databse again we will use this 
const connectDB = require('./db/connect')
const Product = require('./models/product')  //--> we pulling the schema from the model

const jsonProducts = require('./products.json');

const start= async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
         await Product.deleteMany();         //--> this is just if in case added unwanted data then u can remove it 
         await Product.create(jsonProducts)             //--> taking and creating the data from the product.json --> file
        console.log('Success!!!!!');         //--> when u run r refresh ur atlas then u will getting the product json values
        process.exit(0)     //--> this is set to is everthing evenyt well it will exist as we will be wokring o app<not populate mostly 
    } catch (error) {
        console.log(error);
        process.exit(1)        //--> if u still get any error over here we will get a mesage 
    }
}
start()

//--> if it passes it run and exist so that u can do the other tasks -->