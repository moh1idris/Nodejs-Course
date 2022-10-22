const mongoose = require('mongoose') //--> connect to mangoose 

// const connectionString = 'mongodb+srv://ajju2:ajju212345@nodeexpressproject.selohzy.mongodb.net/?retryWrites=true&w=majority'
const connectionString = 'mongodb+srv://ajju2:Ajju12345@nodeexpressproject.selohzy.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


mongoose
.connect(connectionString)
.then(()=> console.log('CONNECTED TO THE DB...'))
.catch((err)=>console.log(err))
