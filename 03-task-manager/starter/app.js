// console.log('Task Manager App')
// //--> here we will leran how to setup data to the cloud
// //--> here we will also get to know how to create CRUD Opertions


// const express = require('express');
// const app = express();

// //--> setting the routes 
// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')              //-->http://localhost:3000/hello  --> task manager app
// })

// // app.get('/api/v1/tasks')          - get all the task 
// // app.post('/api/v1/tasks')         - Create a new task 
// // app.get('/api/v1/tasks/:id')      - get  single task 
// // app.patch('/api/v1/tasks/:id')    - update task
// // app.delete('/api/v1/tasks/:id')   - delete task 

// const port = 3000       //--> setting up an variable with name--port by hardCOding the value --3000
// app.listen(3000, console.log(`Server is listening on port ${port}... `))











// //--> Here --> we are usinhg the task.js where there it get method -- and we have set the router over there
// const express = require('express');
// const app = express();
// const tasks = require('./routes/tasks')                  
// // middleware
// app.use(express.json())                 //--> if we dont use this then  we will not get the req.body

// //--> setting the routes 
// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')             
// })

// //--> setting up the route rote -->
// app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks

// const port = 3000       
// app.listen(3000, console.log(`Server is listening on port ${port}... `))












// //--> here we are connecting it to the dataBase with the name as --. 03-TASK-MANAGER
// require('./db/connect')
// const express = require('express');
// const app = express();
// const tasks = require('./routes/tasks')                  


// // middleware
// app.use(express.json())                 //--> if we dont use this then  we will not get the req.body

// //--> setting the routes 
// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')             
// })

// //--> setting up the route rote -->from the routes-->task.js
// app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks

// const port = 3000       
// app.listen(3000, console.log(`Server is listening on port ${port}... `))








// // // --> HERE WE ARE CONNECTING THE DATA BASE FIRST IF IT PASSES THEN ONLY THTE SERVER WILL RUN 
// const express = require('express');
// const app = express();
// const tasks = require('./routes/tasks')                  
// const connectDB = require('./db/connect')  //--> this will go and connect to the connect.js
// // middleware
// app.use(express.json())                 //--> if we dont use this then  we will not get the req.body

// //--> setting the routes 
// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')             
// })

// //--> setting up the route rote -->from the routes-->task.js
// app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks

// const port = 3000       
// //--> since if the 
// const start = async ()=>{
//     try {
//         await connectDB()               //--> as we have hard coded the connectDB 
//         app.listen(3000, console.log(`Server is listening on port ${port}... `))
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()

















// //--> here we are setting the .env file 
// const express = require('express');
// const app = express();
// const tasks = require('./routes/tasks')                  
// const connectDB = require('./db/connect')  //--> this will go and connect to the connect.js
// require('dotenv').config()          ///--> this is done for the sake of the file made .env file 

// // middleware
// app.use(express.json())                 //--> if we dont use this then  we will not get the req.body

// //--> setting the routes 
// app.get('/hello', (req,res)=>{
//     res.send('Task Manager App')             
// })

// //--> setting up the route rote -->
// app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks

// const port = 3000       
// //--> since if the 
// const start = async ()=>{
//     try {
//         await connectDB(process.env.MONGO_URI)      //--> wated to keep my screat varibale very very secrect  so setetd up the .env file          
//         app.listen(3000, console.log(`Server is listening on port ${port}... `))
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()



// //--> creating the module folder
//-->
// const express = require('express');
// const app = express();
// const tasks = require('./routes/tasks')                  
// const connectDB = require('./db/connect')  //--> this will go and connect to the connect.js
// require('dotenv').config()          ///--> this is done for the sake of the file made .env file 

// // middleware
// app.use(express.static('./public'))
// app.use(express.json())                 //--> if we dont use this then  we will not get the req.body




// //--> setting up the route rote -->
// app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks

// const port = 3000       
// //--> since if the 
// const start = async ()=>{
//     try {
//         await connectDB(process.env.MONGO_URI)      //--> wated to keep my screat varibale very very secrect  so setetd up the .env file          
//         app.listen(3000, console.log(`Server is listening on port ${port}... `))
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()



// // //-->after seeting the middleware--> not-found file 
// const express = require('express');
// const app = express();
// const tasks = require('./routes/tasks')                  
// const connectDB = require('./db/connect')  //--> this will go and connect to the connect.js
// require('dotenv').config()          ///--> this is done for the sake of the file made .env file 
// const notFound = require('./middleware/not-found')
// const errorHandlerMiddleware = require('./middleware/error-handler')

// // middleware
// app.use(express.static('./public'))
// app.use(express.json())                 //--> if we dont use this then  we will not get the req.body


// //--> setting up the route rote -->
// app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks
// app.use(notFound)                 //--> this is to set the route as anyone changes the route as speel in correct link then 
// app.use(errorHandlerMiddleware)

// const port = 3000        
// //--> since if the 
// const start = async ()=>{
//     try {
//         await connectDB(process.env.MONGO_URI)      //--> wated to keep my screat varibale very very secrect  so setetd up the .env file          
//         app.listen(3000, console.log(`Server is listening on port ${port}... `))
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()



// // Here im seeting th eport variable 

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')                  
const connectDB = require('./db/connect')  //--> this will go and connect to the connect.js
require('dotenv').config()          ///--> this is done for the sake of the file made .env file 
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())                 //--> if we dont use this then  we will not get the req.body


//--> setting up the route rote -->
app.use('/api/v1/tasks', tasks)              //-->http://localhost:3000/api/v1/tasks
app.use(notFound)                             //--> this is to set the route as anyone changes the route as speel in correct link then 
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000     //--> here im setting up the port in .env file 
//--> since if the 
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)      // wated to keep my screat varibale very very secrect  so setetd up the .env file          
        app.listen(port,console.log(`Server is listening on port ${port}... `))
    } catch (error) {
        console.log(error);
    }
};
start();
// vbhjk

