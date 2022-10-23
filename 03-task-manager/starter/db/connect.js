// const mongoose = require('mongoose') //--> connect to mangoose 

// // const connectionString = 'mongodb+srv://ajju2:ajju212345@nodeexpressproject.selohzy.mongodb.net/?retryWrites=true&w=majority'
// const connectionString = 'mongodb+srv://ajju2:Ajju12345@nodeexpressproject.selohzy.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

// mongoose
// .connect(connectionString, {           ///when u get an error then you can use this lines
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,               
//     useUnifiedTopology: true,                               
// })                                                 //--> if you are using V6, don't need to this 
// .then(()=> console.log('CONNECTED TO THE DB...'))
// .catch((err)=>console.log(err))






// // IMPORTANT
// //--. here if the database id connected then only the server should run or else not then use this 
// const mongoose = require('mongoose') //--> connect to mangoose 

// // const connectionString = 'mongodb+srv://ajju2:ajju212345@nodeexpressproject.selohzy.mongodb.net/?retryWrites=true&w=majority'
// const connectionString = 'mongodb+srv://ajju2:Ajju12345@nodeexpressproject.selohzy.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

// const connectDB = (url)=>{
//     return mongoose
//             .connect(connectionString, {           ///when u get an error then you can use this lines
//                 useNewUrlParser: true,
//                 useCreateIndex: true,
//                 useFindAndModify: false,               
//                 useUnifiedTopology: true,                               
//             })                  //--> if you are using V6, don't need to this 
// }

// module.exports = connectDB


//--> as we are using the .env --file
const mongoose = require('mongoose') //--> connect to mangoose 
const connectDB = (url)=>{
    return mongoose.connect(url, {           ///when u get an error then you can use this lines
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,               
                useUnifiedTopology: true,                               
            })                  //--> if you are using V6, don't need to this 
}

module.exports = connectDB
