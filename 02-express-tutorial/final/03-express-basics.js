

// const app = require('express)();         --same a s below two lines

const express = require('express')                             //--> if u have installed the library then u wwont be getting any sort of error --> import the module
const app = express()                                          //--> invoking the express

app.get('/' ,(req, res)=>{                                     //-->callback fuc will everytine the user use the get-request
    res.status(200).send('Home Page')
})

app.get('/about' ,(req, res)=>{                                //-->callback fuc will everytine the user use the get-request
    res.status(200).send('About Page')
})

app.all('*', (req,res)=>{                                     // // --> if the user check the other as /contact n anything else then u can set like this 
    res.status(404).send('<h1>Resource not found</h1>')
})


app.listen(5000, () =>{                      
    console.log('server is listening on port 5000...');         //--> for time being hardCodng the value then we will use it dyanmically 
})



// app.get
// app.post
// app.put
// app.delete
// app.all       --> will work for all of them
// app.use       -->it is responsible for the middle ware
// app.listen








