
const express = require('express');
const app = express();
const { products } = require('./data')
app.get('/', (req, res) => {             
    res.send('<h1> Home page</h1><a href="/api/products">products</a>')  //--> this will show the products -->where it ill show emtpy
})

app.get('/api/products', (req, res )=>{
    const newProducts = products.map((product)=>{           //--> here im taking out the desc from the json and displaying it 
     const {id,name,image} = product;                       //--> destrucimng the value for the map
     return {id,name,image}                                 //-->will only return this values 
    })
    res.json(newProducts)                                 //--> this will give the only id,name,image 
})



//--> here if i wanna get only a single r particular product by using the id then we can do like this --> byHardCoding the value of the id
// app.get('/api/products/1', (req, res )=>{
//     const singleProduct = products.find((product)=> 
//     product.id === 1)
//     res.json(singleProduct)                                  
// })


// //--> here i will use it dynamically 
app.get('/api/products/:productID', (req, res )=>{
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product)=> 
    product.id === Number(productID))
    //--> if anyone write string instead of number then use this 
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exists')
    }
     return res.json(singleProduct)                                  
})


app.get('/api/products/:productId/reviews/:reviewID',
(req,res)=>{
    console.log(res.params);
    res.send('Hello World')                  //--> will get hello world 
})



//--> query sinyc perameter---> here we will sort 

// app.get('/api/v1/query', (req,res)=>{
//     console.log(req.params);
//     res.send('Hello world') //--> http://localhost:5000/api/v1/query?name=john then it will get -->hello world 
// })


// //-->here we will use to search 
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]      //--> spread operator
  
    if (search) {                               //-->http://localhost:5000/api/v1/query?search=a --> this willl give two json.product 
      sortedProducts = sortedProducts.filter((product) => {               
        return product.name.startsWith(search)
      })
    }
    if (limit) {                                   //-->http://localhost:5000/api/v1/query?limit=2 --> this will give two jsonproducts
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    // //--> if the starts letter is not there then we can set a message  as this below
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })         //--> return is used before (res) to avoid the errors as javascript think response is aske dagian 
    }
    res.status(200).json(sortedProducts)             //--> u cannot send the two -- res-- in the same --req--
  }) 




app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
