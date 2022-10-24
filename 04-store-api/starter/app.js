// console.log('04 Store API')


require('dotenv').config()          //-->if u wanna acess the variable that is we have the mongo uri over there
require('express-async-errors')  //--> here we are not using Async wrapper --> instead --> we have an extrenal package 

const express = require('express')
const app = express();
const connectDB = require('./db/connect')
const  productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


//--> setting up the json middleware 
app.use(express.json())          //--> just adding this in this project as we are not using this in this project 


// routes
app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')     //--> hardCoding the values 
})

app.use('/api/v1/products',productsRouter)

//product route

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on the port ${port}...`))
    } catch (error) {
        console.log(error);
        
    }
}
start()


