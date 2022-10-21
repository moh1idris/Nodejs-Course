const { readFile , writeFile} = require('fs').promises
// const  util  = require('util');                             //--> in this method we have a promisevive
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const  first = await readFile('./content/first.txt','utf8')
        const  second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
        './content/result-mind-grenade.txt', 
        `THIS IS AWESOME : ${first} ${second}`,
        { flag: 'a' }
        )
            console.log(first, second);        
        } catch (error) {
            console.log(error);   
        }
    }


start()




// const { readFile , writeFile} = require('fs');
// const  util  = require('util');                            //--> in this method we have a promisevive
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {
//         const  first = await readFilePromise('./content/first.txt','utf8')
//         const  second = await readFilePromise('./content/second.txt', 'utf8')
//         await writeFilePromise(
//         './content/result-mind-grenade.txt', 
//         `THIS IS AWESOME : ${first} ${second}`,
//          { flag: 'a'}
//         )
//             console.log(first, second);        
//         } catch (error) {
//             console.log(error);   
//         }
//     }


// start()









// // --> USING A WRAPPER FUCNTION -->
// const { readFile } = require('fs');

// const getText = (path) => {                         //--> here we are giving the path 
    //     return new Promise ((resolve, reject) => {      
    //         readFile(path,'utf8', (err, data) => {
    //             if(err){
    //                 reject(err);
    //                 return
    //             } else {
    //                 resolve(data);      
    //             }
    //         })
    //     })
    
    // }
    
    
    // getText('./content/first.txt')                         //--> if the path is incorrect then u will get an error 
    // .then((result) => console.log(result))                 //--> makinhg all the function as promise 
    // .catch(err =>console.log(err)
    // )