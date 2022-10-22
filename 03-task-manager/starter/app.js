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

// const port = 3000       //--> setting up an variable with name--port by gardCOding the value --3000
// app.listen(3000, console.log(`Server is listening on port ${port}... `))



//--> Here --> we are usinhg the task.js where there it get method -- and we have set the router over there
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')                  


// middleware
app.use(express.json())                 //--> if we dont use this then  we will not get the req.body

//--> setting the routes 
app.get('/hello', (req,res)=>{
    res.send('Task Manager App')             
})

//--> setting up the route rote -->
app.use('/api/v1/tasks',tasks)               //-->http://localhost:3000/api/v1/tasks

const port = 3000       
app.listen(3000, console.log(`Server is listening on port ${port}... `))