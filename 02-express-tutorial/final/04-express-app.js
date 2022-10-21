

const express = require('express');
const path = require('path');                    //--> this is to send the index.html file so using path--> this will giv ethe absolute path 
const app = express();

//setup static and middleware
app.use(express.static('./public'))          //we will create a file add the other three file which are there in the html so that it wont get any error 

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))         //--> instead of <reslove> we can use <join> also
  })                           


app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})


app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})



