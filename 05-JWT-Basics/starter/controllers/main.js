// check username, password in the post(loginn) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can acess the dashboard


      //-->1. mongo --> mango validationdatabase if its noit there over ther then it spit back th eerror 
      //->2. Joi
      //-->3. check in the controller --> we useing the 3rd option
// const jwt = require('jsonwebtoken')
// const CustomAPIError = require('../errors/custom-error')      

// const login = async (req,res)=>{
//     const {username,password} = req.body   //--> as the data will be there in the req.body--> works only u add the jsonbody in POST
//     if(!username || !password){
//         throw new CustomAPIError('Please provide email and password',400)   //--> if you aren't using || providing any username r pass --> will throw Error
//     }
       
//     //--> after install n importing the JWT 
//     // try to keep payload small, better experience for the user
//     // just for the demo , in production use long, complex and unquessable string value!!!!!!!!!!
//     const id = new Date().getDate()
//     const token = jwt.sign({id, username},process.env.JWT_SCRET,{expiresIn:'30d'})
//     // console.log(username,password);
//     res.status(200).json({msg:'user created',token}) //--> then u go to POST add name->john n pass->scret--> u will get token
// }


// const dashboard = async (req,res)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader || !authHeader.startsWith('Bearer ')){ //-->if it doest start with headers r bearer then we throw a custom error
//    throw new CustomAPIError('No token provided',401)        //--> if u dont give a token then it willl give u error 
// }
// const token = authHeader.split(' ')[1]  //--> this will give u the token in the console
// console.log(token);
// //--> varifying it 
// try {
//     const decoded = jwt.verify(token,process.env.JWT_SCRET)
//     console.log(decoded);
    
// } catch (error) {
//         throw new CustomAPIError('Not authorized to access this route',401)        //--> if u dont give a token then it willl give u error 
        
//     }
    
//     const luckyNumber = Math.floor(Math.random()*100)     //--> taking randonNo n * it to 100 then wrappning it into the Math
//     res.status(200).json({msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
// }

// module.exports = {
//                   login,
//                   dashboard
//                   }



//-->                  
// const jwt = require('jsonwebtoken')
// const CustomAPIError = require('../errors/custom-error')      

// const login = async (req,res)=>{
//     const {username,password} = req.body   //--> as the data will be there in the req.body--> works only u add the jsonbody in POST
//     if(!username || !password){
//         throw new CustomAPIError('Please provide email and password',400)   //--> if you aren't using || providing any username r pass --> will throw Error
//     }
       
//     //--> after install n importing the JWT 
//     // try to keep payload small, better experience for the user
//     // just for the demo , in production use long, complex and unquessable string value!!!!!!!!!!
//     const id = new Date().getDate()
//     const token = jwt.sign({id, username},process.env.JWT_SCRET,{expiresIn:'30d'})
//     // console.log(username,password);
//     res.status(200).json({msg:'user created',token}) //--> then u go to POST add name->john n pass->scret--> u will get token
// }


// const dashboard = async (req,res)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader || !authHeader.startsWith('Bearer ')){ //-->if it doest start with headers r bearer then we throw a custom error
//    throw new CustomAPIError('No token provided',401)        //--> if u dont give a token then it willl give u error 
// }
// const token = authHeader.split(' ')[1]  //--> this will give u the token in the console
// // console.log(token);
// //--> varifying it 
// try {
//     const decoded = jwt.verify(token,process.env.JWT_SCRET)
//     // console.log(decoded);
//     const luckyNumber = Math.floor(Math.random()*100)     //--> taking randonNo n * it to 100 then wrappning it into the Math
//     res.status(200).json({msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    
// } catch (error) {
//         throw new CustomAPIError('Not authorized to access this route',401)        //--> if u dont give a token then it willl give u error 
        
//     }
    
    
// }

// module.exports = {
//                   login,
//                   dashboard
//                   }


//--> after setting up the middle war 
// const jwt = require('jsonwebtoken')
// const CustomAPIError = require('../errors/custom-error')      

// const login = async (req,res)=>{
//     const {username,password} = req.body   //--> as the data will be there in the req.body--> works only u add the jsonbody in POST
//     if(!username || !password){
//         throw new CustomAPIError('Please provide email and password',400)   //--> if you aren't using || providing any username r pass --> will throw Error
//     }
       
//     //--> after install n importing the JWT 
//     // try to keep payload small, better experience for the user
//     // just for the demo , in production use long, complex and unquessable string value!!!!!!!!!!
//     const id = new Date().getDate()
//     const token = jwt.sign({id, username},process.env.JWT_SCRET,{expiresIn:'30d'})
//     // console.log(username,password);
//     res.status(200).json({msg:'user created',token}) //--> then u go to POST add name->john n pass->scret--> u will get token
// }


// const dashboard = async (req,res)=>{
//     console.log(req.user);
    
//     const luckyNumber = Math.floor(Math.random()*100)     //--> taking randonNo n * it to 100 then wrappning it into the Math
//     res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

// }
 
// module.exports = {
//                   login,
//                   dashboard
//                   }







const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')      

const login = async (req,res)=>{
    const {username,password} = req.body   //--> as the data will be there in the req.body--> works only u add the jsonbody in POST
    if(!username || !password){
        throw new BadRequestError('Please provide email and password')  
    }
        const id = new Date().getDate()
        const token = jwt.sign({id, username},process.env.JWT_SECRET)
        res.status(200).json({msg:'user created',token}) //--> then u go to POST add name->john n pass->scret--> u will get token
    }

    const dashboard = async (req,res)=>{   
        const luckyNumber = Math.floor(Math.random()*100)     //--> taking randonNo n * it to 100 then wrappning it into the Math
        res.status(200).json
        ({msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

}
 
module.exports = {
                  login,
                  dashboard
                  }
