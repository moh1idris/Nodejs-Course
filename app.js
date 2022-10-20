// npm - global command, comes with node
// npm  --version

// loacl dependancy - use it only in htis particular project
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everthing default)

const _ = require('lodash')                    //--> here it is nothing but the lodash
 
const items = [1, [2, [3, [4]]]]           //--> array of array's
const newItems = _.flattenDeep(items);
console.log(newItems);

