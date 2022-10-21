
const express = require('express');
const app = express();
const { products } = require('./data')
app.get('/', (req, res) => {
//   res.json([{ name: 'john' }, { name: 'susan' }])      //--> here we are setting the basic JSON    -->hardCoding the values   
  res.json(products)                                      //--> method name is json-> and it wwill give all the json which is there in it 
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
