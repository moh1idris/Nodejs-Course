
// //--> taking it to next level setup now -->by seting up an html an pulling in in here
// const http = require('http')        
// ////--> reading a file here which is created in  as index.html
// const { readFileSync } = require('fs')
// //get all files 
// const homepage = readFileSync('./index.html')
// const server = http.createServer((req, res) =>{                                  
//     const url = req.url;
//     // home page
//     if(url === '/'){
//         res.writeHead(200, {'content-type':'text/html'})                //--> if we chnage it to content-type to plain it willl show the body of the html as text           
//         res.write(homepage)         //--> here it will go to the html file and execute the contecnt what it has                          
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



// //--> here i had a html so i did this type deep Diveinto
const http = require('http')        
////--> reading a file here which is created in  as index.html
const { readFileSync } = require('fs')
//get all files 
const homepage = readFileSync('./navbar-app/index.html')   ///--> only this will not work as within html it is involed into other pages 
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req, res) =>{                                  
    const url = req.url
    console.log(url);                                //--> it will show it 404 for style,logo,broswer
    
    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})                
        res.write(homepage)                         //--> here it will go to the html file and execute the contecnt what it has                          
        res.end()
    }
    // about page
    else if (url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})               
        res.write('<h1>About page</h1>')                           
        res.end()
    }
    // Styles
    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})               
        res.write(homeStyles)                           
        res.end()
    }
    // image/logo
    else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})               
        res.write(homeImage)                           
        res.end()
    }
    // logic
    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})               
        res.write(homeLogic)                           
        res.end()
    }
    // 404
    else  {
        res.writeHead(404, {'content-type':'text/html'})               
        res.write('<h1> page not found</h1>')                           
        res.end()
    }
})
server.listen(5000)   