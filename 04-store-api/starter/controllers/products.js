

// const getAllProductsStatic = async(req,res)=>{
//     res.status(200).json({msg:'products tesing route'})
// }
// const getAllProducts = async(req,res)=>{
//     res.status(200).json({msg:'products  route'})
// }

// module.exports ={
//                   getAllProducts,
//                   getAllProductsStatic 
//                   }


//--. after importing the asynv--
// const getAllProductsStatic = async(req,res)=>{
//     throw new Error('testing async error')          //--> setting up the error jus to che ck its working r not --> go to post man --> n try it out 
//     res.status(200).json({msg:'products tesing route'})
// }
// const getAllProducts = async(req,res)=>{
//     res.status(200).json({msg:'products  route'})
// }

// module.exports ={
//                   getAllProducts,
//                   getAllProductsStatic 
//                   }


//--> after setting schema n adding the products to the datbase with the help on populate.js--> file
// const Product = require('../models/product')
// const getAllProductsStatic = async(req,res)=>{
//     // const Products = await Product.find({})         //--> pasing the empty object -->
//     const products = await Product.find({
//     featured:true,                       //--> if u want some spicific product by the name r the company then use this --> will get only the treu once--
//     // name: 'vase table',
// }) 
//     res.status(200).json({ products , nbHits: products.length })
// }
// const getAllProducts = async(req,res)=>{
//     // console.log(req.query);           //--> when u had hardCoded vales in post we willl get the vales here what wev have hardCoded iver there
//     const products = await Product.find(req.query);
//     //   res.status(200).json({msg:'products  route'})
//     res.status(200).json({products , nbHits: products.length})
// }

// module.exports ={getAllProducts,getAllProductsStatic}



//--> taking it to next level -->if i want page also which is not there in over data if we use that it still shoulg get all the data 
// const Product = require('../models/product')
// const getAllProductsStatic = async(req,res)=>{
//     // const Products = await Product.find({})         //--> pasing the empty object -->
//     const products = await Product.find({
//     featured:true,                       //--> if u want some spicific product by the name r the company then use this --> will get only the treu once--
   
// }) 
//     res.status(200).json({ products , nbHits: products.length })
// }
// const getAllProducts = async(req,res)=>{        //--> just looking to the feature
//     const { featured } = req.query             //--> pulling out the property only i wanna define 
//     const queryObject = {}                     //-----> if featuerd is mentioned in post then it will give that r else it will return n empty object to the terminnal
//     if(featured){            //-->if true then set -->
//         queryObject.featured = featured === 'true'? true : false  //--> if true then this 
//     }
//     console.log(queryObject)
//     const products = await Product.find(queryObject);
//     res.status(200).json({products , nbHits: products.length})
// }
// module.exports ={getAllProducts,getAllProductsStatic}



//-- here we are adding the company also 
// const Product = require('../models/product')
// const getAllProductsStatic = async(req,res)=>{
//     const products = await Product.find({
//     featured:true,                       
// }) 
//     res.status(200).json({ products , nbHits: products.length })
// }
// const getAllProducts = async(req,res)=>{        //--> just looking to the feature
//     const { featured , company } = req.query    //--> pulling out the property only i wanna define 
//     const queryObject = {}                      //-----> if featuerd is mentioned in post then it will give that r else it will return n empty object to the terminnal
//     if(featured){            //-->if true then set -->
//         queryObject.featured = featured === 'true'? true : false  //--> if true then this 
//     }
//     if(company){
//         queryObject.company = company         //--> the company exist pull it 
//     }
//     console.log(queryObject)
//     const products = await Product.find(queryObject);
//     res.status(200).json({products , nbHits: products.length})
// }

// module.exports ={getAllProducts,getAllProductsStatic}


//--> setting up the name 
// const Product = require('../models/product')
// const getAllProductsStatic = async(req,res)=>{
//     const search = 'ab'
//     const products = await Product.find({
//         name: {$regex: search, $options: 'i'}
//     }) 
//     res.status(200).json({ products , nbHits: products.length })
// }
// const getAllProducts = async(req,res)=>{        //--> just looking to the feature
//     const { featured , company , name } = req.query    //--> pulling out the property only i wanna define 
//     const queryObject = {}                   //-----> if featuerd is mentioned in post then it will give that r else it will return n empty object to the terminnal
//     if(featured){            //-->if true then set -->
//         queryObject.featured = featured === 'true'? true : false  //--> if true then this 
//     }
//     if(company){
//         queryObject.company = company         //--> the company exist pull it 
//     }
//     if(name){                 //--> if the name exist then query object 
//     //    queryObject.name = name            //--> this will execute only the name matches that too whole name 
//           queryObject.name = {$regex: name, $options: 'i'}
//     }
//     console.log(queryObject)
//     const products = await Product.find(queryObject);
//     res.status(200).json({products , nbHits: products.length})
// }

// module.exports ={getAllProducts,getAllProductsStatic}


//-->seeting up the limit
// const Product = require('../models/product')
// const getAllProductsStatic = async(req,res)=>{
//     // const products = await Product.find({}).sort('name')    //--> this will sort only by name
//     const products = await Product.find({}).sort('-name price')    //--> in opsitie ->
//     res.status(200).json({ products , nbHits: products.length })
// }
// const getAllProducts = async(req,res)=>{        //--> just looking to the feature
//     const { featured , company , name ,sort } = req.query    //--> pulling out the property only i wanna define 
//     const queryObject = {}                   //-----> if featuerd is mentioned in post then it will give that r else it will return n empty object to the terminnal
//     if(featured){            //-->if true then set -->
//         queryObject.featured = featured === 'true'? true : false  //--> if true then this 
//     }
//     if(company){
//         queryObject.company = company         //--> the company exist pull it 
//     }
//     if(name){                 //--> if the name exist then query object 
//           queryObject.name = {$regex: name, $options: 'i'}
//     }
//     // console.log(queryObject)
//     let result =  Product.find(queryObject)
//     if(sort){
//     //  console.log(sort)
//     const sortList = sort.split(',').join(' ');
//     result = result.sort(sortList)
//     }
//     else {     //--> if the user havntt used it then we i can set a default
//         result = result.sort('createdAt')
//    }
//     const products = await result
//     res.status(200).json({products , nbHits: products.length})
// }

// module.exports ={getAllProducts,getAllProductsStatic}


//--> if i just want name r rating to display then --> limit
// const Product = require('../models/product')
// const getAllProductsStatic = async(req,res)=>{
      
//     // const products = await Product.find({}).select('name price')    
//     const products = await Product.find({})
//     .sort('name')
//     .select('name price')
//     // .limit(10)    
//     // .skip(5)          //--> this will skip the first item -->
//     res.status(200).json({ products , nbHits: products.length })
// }
// const getAllProducts = async(req,res)=>{        
//     const { featured , company , name , sort , feilds } = req.query    
//     const queryObject = {}                   
//     if(featured){           
//         queryObject.featured = featured === 'true'? true : false 
//     }
//     if(company){
//         queryObject.company = company
//     }
//     if(name){                 
//           queryObject.name = {$regex: name, $options: 'i'}
//     }
//     let result =  Product.find(queryObject)
//     //sort
//     if(sort){
//     const sortList = sort.split(',').join(' ');
//     result = result.sort(sortList)
//     }
//     else {     
//         result = result.sort('createdAt')
//    }
//    //feilds
//    if(feilds){
//     const feildsList = feilds.split(',').join(' ');
//     result = result.select(feildsList)
//    }

//    //page 
//    const page = Number(req.query.page)   || 1   //--> normally req.query is string to make in number we did this 
//    const limit = Number(req.query.limit) || 10  //--> if the limit is not passed then we will take default as 10
//    const skip = (page -1) * limit;
   
//    result = result.skip(skip).limit(limit)
//    // 23 

//     const products = await result
//     res.status(200).json({products , nbHits: products.length})
// }

// module.exports ={getAllProducts,getAllProductsStatic}






//--> ading numeric filters like
const Product = require('../models/product')
const getAllProductsStatic = async(req,res)=>{
      
    // const products = await Product.find({}).select('name price')    
    const products = await Product.find({
    price:{ $gt:30 }})
    .sort('price')
    .select('name price')
    res.status(200).json({ products , nbHits: products.length })
}
const getAllProducts = async(req,res)=>{        
    const { featured , company , name , sort , feilds , numericFilters} = req.query    
    const queryObject = {}                   
    if(featured){           
        queryObject.featured = featured === 'true'? true : false 
    }
    if(company){
        queryObject.company = company
    }
    if(name){                 
          queryObject.name = {$regex: name, $options: 'i'}
    }
    if (numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }      //--> after this will set up the regular expression onee
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let  filters = numericFilters.replace(regEx,(match)=>
        `-${operatorMap[match]}-`)
        // console.log(filters);     //--> if u done write the below cod e then u will get -->price-$gt-40,rating-$gte-4
        const  options = ['price' , 'rating']                     //--> this are using number vallue
        filters = filters.split(',').forEach((item)=>{            //--> spliting string into an array
            const [feild,operator,value] = item.split('-')        //--> spliting into array 
            if(options.includes(feild)){                          //--> in it has price and rating then only the feilds work
                queryObject[feild] = {[operator]:Number(value)}   //-->{ price: { '$gt': 40 }, rating: { '$gte': 4 } } --> will show like this 
            }
        })
        
    }

    console.log(queryObject);
    
    let result =  Product.find(queryObject)
    //sort
    if(sort){
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList)
    }
    else {     
        result = result.sort('createdAt')
   }
   //feilds
   if(feilds){
    const feildsList = feilds.split(',').join(' ');
    result = result.select(feildsList)
   }

   //page 
   const page = Number(req.query.page)   || 1   //--> normally req.query is string to make in number we did this 
   const limit = Number(req.query.limit) || 10  //--> if the limit is not passed then we will take default as 10
   const skip = (page -1) * limit;
   
   result = result.skip(skip).limit(limit)
   // 23 

    const products = await result
    res.status(200).json({products , nbHits: products.length})
}

module.exports ={
                  getAllProducts,
                  getAllProductsStatic 
                  }

