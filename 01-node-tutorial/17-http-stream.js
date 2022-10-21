console.log('stream example');
// //--> sending in ONE LARGE CHUNK
// var http = require('http')
// var fs = require('fs')

// http
//     .createServer(function (req, res ) {
//         const text = fs.readFileSync('./content/big.txt', 'utf8')          ///--> here it will reat the file n give the outpiut
//         res.end(text)
//     })
//     .listen(5000)



  // --> this will give you all the text which is ther en the BIG.txt-->
 // you can run and c it in the local host 5000



// //--> sending in ONE LARGE CHUNK
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)                                               //--> pipe will push from readStream to writeStream
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)