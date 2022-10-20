// BUILT-IS path path-Module
const path = require('path');
console.log(path.sep);                    //-> path separator---</>

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath);                     //-->this will show  the path of the file r the folder 

const base = path.basename(filepath)
console.log(base);                          //--> this will show the proper file 


const absolute = path.resolve(__dirname, 'content' , 'subfolder' , 'test.txt');
console.log(absolute);                      //--> this will show you the absolute path from the user to the file 
