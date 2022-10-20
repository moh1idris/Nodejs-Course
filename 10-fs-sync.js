// Talking about the SYnccronous function 
// const {readFileSync} = require('fs');
// const fs = require('fs');

const {readFileSync,writeFileSync} = require('fs');
console.log('start');

//here we have two txt file we will read now -->
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);                              //--> this will show the text in the files what it had 



// Here we will write a file if the file is not there then it will create a new file 
writeFileSync(
'./content/result-sync.txt' , 
`Here is the result : ${first} , ${second}`,             //--> If u delete the text in the result file simple write --> hello world <-- then run node app.js
{ flag: 'a'}                                             //--> flag will override it if you run again it will add that file again          
)
console.log('done with this task');
console.log('staring the next one');
