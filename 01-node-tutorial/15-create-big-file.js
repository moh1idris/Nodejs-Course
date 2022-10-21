// --> these fucntion will crete a file with name of BIG.txt --> and with that it will execeute hello world 9 times

const { writeFileSync } = require('fs')
for(let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt' , `Hello world ${i}\n`,
    { flag: 'a' })
}

 