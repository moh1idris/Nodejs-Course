// const register = async (req, res)=>{
//     res.send('register user')
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}




//-->
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const register = async (req, res)=>{
//     // res.send('register user')          //--> this will give u register user
//     // res.json(req.body)                 //--> what all u gave in  the json-body it will come here 
//     res.status(StatusCodes.CREATED).json(req.body)
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}




//-->
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const register = async (req, res)=>{
//     const user = await  User.create({...req.body})  //--> this will created a user n show in body
//     res.status(StatusCodes.CREATED).json({ user })
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}





//--> if there is a error then throw a message 
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const  { BadRequestError} = require('../errors')
// const register = async (req, res)=>{
// //--> comment the below thing n and still give u the erro but status 500
//                 // const {name,email,password} = req.body          //--> from the json.body
//                 // if(!name  || !email  || !password){             //--> checking if anyone is missing then -->will throw the error--> 
//                 //     throw new BadRequestError('please provide name, email and password')
//                 // }             
//     const user = await  User.create({...req.body})  //--> this will created a user n show in body
//     res.status(StatusCodes.CREATED).json({ user })
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}




//-->Here we are usng password hashing --> npm install bcrypt js
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const  { BadRequestError} = require('../errors')
// const bcrypt = require('bcryptjs')
// const register = async (req, res)=>{     
// const {name,email,password} = req.body

// const salt = await bcrypt.genSalt(10)                   //--> here we are generating a random 10bytes--> the more random number u have the more processing power is requred
// const hashedPassword = await bcrypt.hash(password,salt) //-->here u just a dd up the salt on it 
//              //--> creting atempory new object 
//             const tempUser = {name,email,password:hashedPassword} 
//             const user = await  User.create({ ...tempUser })  
//    res.status(StatusCodes.CREATED).json({ user })     //--> this will give u the user HASHEDpasswor which is not a good-ONe
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}



//--> after setting the hashed password over the model itself-->
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const  { BadRequestError} = require('../errors')
// // const bcrypt = require('bcryptjs')

// const register = async (req, res)=>{     
//    const user = await  User.create({ ...req.body })  
//    res.status(StatusCodes.CREATED).json({ user })     //--> this will give u the user HASHEDpasswor which is not a good-ONe
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}




//--> adding up the JWT --->
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const  { BadRequestError} = require('../errors')
// const jwt = require('jsonwebtoken')

// const register = async (req, res)=>{     
//    const user = await  User.create({ ...req.body }) 
//    //-->creting web token
//    const token =  jwt.sign({userId:user._id,     //-->user._id--> is nothing but we are getting it from the req.body 
//     name: user.name},       
//     'jwtSecret',
//    {expiresIn:'30d'})
//    res
//    .status(StatusCodes.CREATED)
//    .json({user: { name: user.name }, token })     //--> with th ehlp of this we willl be getting the token 
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}


//-->this is 20402
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const  { BadRequestError} = require('../errors')
// const jwt = require('jsonwebtoken')
// const register = async (req, res)=>{     
//    const user = await  User.create({ ...req.body }) 
//    //-->creting web token
//    const token =  jwt.sign({userId:user._id,     //-->user._id--> is nothing but we are getting it from the req.body 
//     name: user.getName()},                   //--> here we created a sechamethod so it will generate the token 
//     'jwtSecret',
//    {expiresIn:'30d'})
//    res
//    .status(StatusCodes.CREATED)
//    .json({user: { name: user.name }, token })     //--> with th ehlp of this we willl be getting the token 
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}




//--> here we removed the 20402--> adding up 295295
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')

// const register = async (req, res)=>{     
//    const user = await  User.create({ ...req.body }) 
//    //--> ading the instance Method->
//    const token = user.createJWT()
//    res.status(StatusCodes.CREATED)
//    .json({user: { name: user.name},  token })
// }
// const login = async (req, res)=>{
//     res.send(' login user')
// }
// module.exports = { login, register}


//--> adding up th elogin Here-->
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes')
// const  { BadRequestError , UnauthenticatedError} = require('../errors')

// const register = async (req, res)=>{     
//    const user = await  User.create({ ...req.body }) 
//    const token = user.createJWT()
//    res.status(StatusCodes.CREATED)
//    .json({user: { name: user.name},  token })
// }
// const login = async (req, res)=>{
//    const {email, password} = req.body

//    if(!email  ||  !password){
//     throw new BadRequestError('Please provide email and password')
//    }
//    const user = await User.findOne({email})              //--. check ig fro the user 
//    // compare password
//    if(!user){                   //--> if there is no user will send UnauthenticatedError
//     throw new UnauthenticatedError('Invalid credentials')
//    }
//     const token = user.createJWT();
//     res.status(StatusCodes.OK)
//    .json({user: { name: user.name},  token })

// }
// module.exports = { login, register}



//-->adding insance method -->789789
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes')
const  { BadRequestError , UnauthenticatedError} = require('../errors')

const register = async (req, res)=>{     
   const user = await  User.create({ ...req.body }) 
   const token = user.createJWT()
   res.status(StatusCodes.CREATED)
   .json({user: { name: user.name},  token })
}
const login = async (req, res)=>{
   const {email, password} = req.body

   if(!email  ||  !password){
    throw new BadRequestError('Please provide email and password')
   }
   const user = await User.findOne({email})              //--. check ig fro the user 
   if(!user){                   //--> if there is no user will send UnauthenticatedError
    throw new UnauthenticatedError('Invalid credentials')
   }
// compare password 
const isPassword = await user.comparePassword(password)       //--> it worjk on ly if the user is there then r else it will send invalid credentials 
if(!isPassword){                   //--> if there is no user will send UnauthenticatedError
    throw new UnauthenticatedError('Invalid credentials')
}
    const token = user.createJWT();
    res.status(StatusCodes.OK)
   .json({user: { name: user.name},  token })

}
module.exports = { login, register}