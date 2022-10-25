// const jwt = require('jsonwebtoken')
// const CustomAPIError = require('../errors/custom-error')      

// const authenticationMiddleware = async (req,res,next)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader || !authHeader.startsWith('Bearer ')){ //-->if it doest start with headers r bearer then we throw a custom error
//    throw new CustomAPIError('No token provided',401)        //--> if u dont give a token then it willl give u error 
// }
// const token = authHeader.split(' ')[1]  //--> this will give u the token in the console

// try {
//     const decoded = jwt.verify(token,process.env.JWT_SCRET)
// const { id, username } = decoded
//    req.user = { id, username }
//    next()
// } catch (error) {
//         throw new CustomAPIError('Not authorized to access this route',401)        //--> if u dont give a token then it willl give u error 
//     }
// }

// module.exports = authenticationMiddleware



// const jwt = require('jsonwebtoken')
// const { UnauthenticatedError } = require('../errors')      

// const authenticationMiddleware = async (req,res,next)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader || !authHeader.startsWith('Bearer ')){ //-->if it doest start with headers r bearer then we throw a custom error
//      throw new UnauthenticatedError('No token provided')    
// }
// const token = authHeader.split(' ')[1]  

// try {
//     const decoded = jwt.verify(token,process.env.JWT_SECRET)
// const { id, username } = decoded
//    req.user = { id, username }
//    next()
// } catch (error) {
//     throw new UnauthenticatedError('Not authorized to access this route') 
//     }
// }

// module.exports = authenticationMiddleware

const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token provided')
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { id, username } = decoded
    req.user = { id, username }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route')
  }
}

module.exports = authenticationMiddleware