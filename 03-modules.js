// Moduels  -  Encapsulation Code (only share minimun)
// CommonJs, every file is module (by default) 


// const names =  require('./04-names')
// const sayHi =  require('./05-utils')
// console.log(names);      //--> this will give u only the share one not the <Secret> not the --local--

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);





//if we use destructuirng then  we can get like this also  
const {john , peter} =  require('./04-names')
const sayHi =  require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data);
require('./07-mind-grenade')

sayHi('susan');
sayHi(john);
sayHi(peter);


