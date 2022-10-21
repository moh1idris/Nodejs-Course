const http = require('http')

// const server = http.createServer((req,res) => {
//     res.end('Welcome')
// })                                                 //--> when u run the localhost :5000 u will get --> welcome 

// Using the Event Emitter API
const server = http.createServer()
// emit request event
// subcribe to it / listen for it / respond to it
server.on('request', (req,res) => {                    //--> here the server has the on-method
    res.end('welcome')
})

server.listen(5000)

// request is listened