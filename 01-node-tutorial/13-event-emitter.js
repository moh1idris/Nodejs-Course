// // on - listen for an event 
// // emit - emit an event


// // get back the class
// // if want custom extend from class
// // otherwise just for emitting and handling events create instance



// const EventEmitter = require('events'); 
// const customEMitter = new EventEmitter()     //-->creted an object 

// customEMitter.on('response',() => {          //--> response is the name of the event 
//  console.log(`data recieved `);
// })           
// customEMitter.on('response',() => {          //--> response is the name of the event 
//     console.log(`some other logic  here `);
//    })  
// customEMitter.emit('response')               //-->emit is nothing but caling the function 




// // Here i'm passing the arguments just like names n id for the user and only to the 1-->on 
const EventEmitter = require('events'); 
const customEMitter = new EventEmitter()                //-->creted an object 

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
 
customEMitter.on('response',(name,id) => {             //--> response is the name of the event 
 console.log(`data recieved user ${name} with id:${id}`);
})           
customEMitter.on('response',() => {                   //--> response is the name of the event 
    console.log(`some other logic  here `);
   })  
customEMitter.emit('response','john', 34)         






// Above we created an instance from the class that we get back from events module
// then we have two method 




// IMPORTANT
// 1... always <ON> should come first then --> <EMIT>
// 2... u can write many on function and can execetue only one --> emit --but its should jhave the same name
// 3... u can pass the argumnet when u emit like 