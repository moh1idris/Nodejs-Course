const express = require('express')
const app = express()
const morgan = require('morgan')                          //--> for this you have to install the morgan separatly 
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res


// 1. use vs route
// 2. options - our / express / third party

// app.use([logger, authorize])
// app.use(express.static('./public'))                       //--> this is from express


app.use(morgan('tiny'))                                     //--> this will show --> {GET /about 304 - - 0.843 ms}--> kind of output

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')                                  //--> this will show --> GET /about 304 - - 0.843 ms
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
