// Always try to write callBack function in the <Async>

const { readFile , writeFile, write } = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf8', (err,result)=>{            //--> if you do not writre utf8--> then it will show as Buffer in the console 
    if(err){
        console.log(err);
        return
    }
    // console.log(result);                                           //--> this will show the text from the first file 
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
         `Here is the result : ${first}, ${second}`,
        //  { flag: 'a'}  ,
         (err, result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('done with the task');
            
            
         })
    })
})
console.log('staring next one ');
