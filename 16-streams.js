// const  { createReadStream} = require('fs');            //--> methods name creteReadStream
// // const { result } = require('lodash');

// // default 64kb
// // last buffer - remainder
// // highWaterMark - control size
// // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// // const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// // Creating an instance -->
// const stream = createReadStream('./content/big.txt');

// stream.on('data', (result) => {             //--> event
//    console.log(result);                     //--> this will give you the chunk of the data
// })






const  { createReadStream} = require('fs');            //--> methods name creteReadStream

const stream = createReadStream('../content/big.txt',
{ highWaterMark: 90000,                                 //--> for this u will get 2 consolelog--2one is remender
encoding: 'utf8' });                                    //--> this will console log <HEllo world>                              
           
stream.on('data', (result) => {             //--> event
   console.log(result);                     //--> this will give you the chunk of the data
})

// -->using error to <.> in the stream above 
stream.on('error', (err) => console.log(err))               //--> gave WRONG PATH IN ABove
