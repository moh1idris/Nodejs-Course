// BUILT-In  OS-Module               //---> try to do all the built in modulees 
const os = require('os')             //--> os --> is nothing but the opratingsystem 

// info about current user
const user = os.userInfo()
console.log(user);


// method returns the system uotime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);


const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS);