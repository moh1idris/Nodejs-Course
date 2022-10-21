const express = require('express')
const app = express()

//  req => middleware => res
//--> basic setup
// app.get('/',(req,res)=>{
//     res.send('Home')
// })
// app.get('/about',(req,res)=>{
//     res.send('About')
// })
// app.listen(5000,()=>{
//     console.log('Server is listening on the port 5000....');
// })



//-->  when u want to add a loger
// app.get('/',(req,res)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);         ///-> this will give you the --> GET / 2022
//     res.send('Home')
// })
// app.get('/about',(req,res)=>{
//     res.send('About')
// })
// app.listen(5000,()=>{
//     console.log('Server is listening on the port 5000....');
// }) 



// //--> if we have to many route then we can deal like this 
const logger = (req,res,next )=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);         ///-> this will give you the --> GET / 2022
    // res.send('Testing')             //--> this will stop the spining and execute tesing
    next()         
 }                
app.get('/', logger ,(req,res)=>{
    res.send('Home')
})
app.get('/about',logger, (req,res)=>{
    res.send('About')
})
app.listen(5000,()=>{
    console.log('Server is listening on the port 5000....');
}) 