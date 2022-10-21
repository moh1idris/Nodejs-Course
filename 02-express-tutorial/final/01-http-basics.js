

//--> we are passing the contenet of the page not the whole file 
// const http = require('http')        //--> if u do this also http://localhost:5000/about--> it will show as home page 
// const server = http.createServer((req, res) =>{    //-->with method createserver 
//     console.log('user hit the server')
//     res.end('Home page')                           //--> if u do not do this it will keep spinning
// })
// server.listen(5000)                               //--> returning the object from the createserver--> with a method listen




////-->providing meta data about respose
// const http = require('http')        
// const server = http.createServer((req, res) =>{    
//     res.writeHead(200, {'content-type':'text/html'})                    //--> if u write type = plain then it willl  shoe the tags as text 
//     res.write('<h1>Home page</h1>')                           
//     res.end()
// })
// server.listen(5000)                               


// //--> Dealing with the request object
// const http = require('http')        
// const server = http.createServer((req, res) =>{    
//     // console.log(req);                                   //--> if u add this and run the l5000 then u will get a gaint object 
//     // console.log(req.method);                             //--> this will give you the methiod which you are using 
//     console.log(req.url)                                   //--> this will show u the url which u r using in l500
//     res.writeHead(200, {'content-type':'text/html'})                    //--> if u write type = plain then it willl  shoe the tags as text 
//     res.write('<h1>Home page</h1>')                           
//     res.end()
// })
// server.listen(5000)    



// //--> setting an if statement so if home then what r else what 
// const http = require('http')        
// const server = http.createServer((req, res) =>{       
//     // console.log(req.method)                                   
//     const url = req.url;
//     // home page
//     if(url === '/'){
//         res.writeHead(200, {'content-type':'text/html'})               
//         res.write('<h1>Home page</h1>')                           
//         res.end()
//     }
//     // about page
//     else if (url === '/about'){
//         res.writeHead(200, {'content-type':'text/html'})               
//         res.write('<h1>About page</h1>')                           
//         res.end()
//     }
//     else  {
//         res.writeHead(404, {'content-type':'text/html'})               
//         res.write('<h1> page not found</h1>')                           
//         res.end()
//     }
// })
// server.listen(5000)    


const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
