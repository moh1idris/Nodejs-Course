// const errorHandlerMiddleware = (err,req, res, next)=>{
//     console.log(err);
//     // return res.status(500).json({msg: `something went wrong, try again later  `})
//     return res.status(err.status).json({msg: err.message})
// }             //-->http://expressjs.com/en/guide/error-handling.html#writing-error-handlers


// module.exports = errorHandlerMiddleware            //--> by setting this file we can customize the error form 



//--> after creating the custom-error file we will chnage the bir code
const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req, res, next)=>{
      if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    // return res.status(500).json({msg: `something went wrong, try again later  `})
    return res.status(500).json({msg: 'Something went wrong, please try again'})
}           

module.exports = errorHandlerMiddleware            //--> by setting this file we can customize the error form 
