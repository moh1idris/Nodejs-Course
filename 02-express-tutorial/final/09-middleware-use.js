



// const express = require('express')
// const app = express()
// const logger = require('./logger')

// //  req => middleware => res
//  ///--> here manully adding the logger to all the routes
// app.get('/', logger,(req, res) => {
//   res.send('Home')
// })
// app.get('/about', logger ,(req, res) => {
//   res.send('About')
// })
// app.get('/api/products', logger, (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', logger, (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })
// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })









// const express = require('express')
// const app = express()
// const logger = require('./logger')

// //  req => middleware => res
//  ///--> here dynamically adding the logger to all the routes
//  app.use(logger)                               //--> app.use --> should always be in the top

//  //  app.use('/api',logger)                    //--> you can also setup with th epath even --> it will be aplied only after the /api -->products n items 
//  // api/home/about/products

//     app.get('/', (req, res) => {
//     res.send('Home')
//     })
//     app.get('/about',(req, res) => {
//     res.send('About')
//     })
//     app.get('/api/products',  (req, res) => {
//     res.send('Products')
//     })
//     app.get('/api/items',  (req, res) => {
//     console.log(req.user)
//     res.send('Items')
//     })
//     app.listen(5000, () => {
//     console.log('Server is listening on port 5000....')
//     })





// //--> adding another file to momve deep Dive in to the middle ware 
// const express = require('express')
// const app = express()
// const logger = require('./logger')
// const authorize = require('./authorize')

// //  req => middleware => res
//  ///--> here dynamically adding the logger to all the routes
//  app.use([logger , authorize])            

//     app.get('/',(req, res) => {                                 //-->http://localhost:5000?user=john 
//     res.send('Home')
//     })
//     app.get('/about',(req, res) => {                          //-->http://localhost:5000/about?user=john 
//     res.send('About')
//     })
//     app.get('/api/products', (req, res) => {                   //-->http://localhost:5000/api/products?user=john 
//     res.send('Products')
//     })
//     app.get('/api/items',(req, res) => {                       //-->http://localhost:5000/api/items?user=john 
//     console.log(req.user)
//     res.send('Items')
//     })
//     app.listen(5000, () => {
//     console.log('Server is listening on port 5000....')
//     })








//  // // ---> if u wanna to authorized only the items then u can use this 
//  const express = require('express')
//  const app = express()
//  const logger = require('./logger')
//  const authorize = require('./authorize')
 
//  //  req => middleware => res
// // 1. use vs route
// // 2. options -our own / express / third party  


//  //   app.use([logger , authorize])            
 
//      app.get('/',(req, res) => {                                 //-->http://localhost:5000
//      res.send('Home')
//      })
//      app.get('/about',(req, res) => {                          //-->http://localhost:5000/about
//      res.send('About')
//      })
//      app.get('/api/products', (req, res) => {                   //-->http://localhost:5000/api/products 
//      res.send('Products')
//      })
//      app.get('/api/items',[logger , authorize],(req, res) => {                       //-->http://localhost:5000/api/items?user=john 
//      console.log(req.user)
//      res.send('Items')
//      })
//      app.listen(5000, () => {
//      console.log('Server is listening on port 5000....')
//      })
 




const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize])
// api/home/about/products
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
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
