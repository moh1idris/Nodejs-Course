//--> verifying the middleWare

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req,res,next)=>{
    // check header 
    const authHeader = req.headers.authorization
    if(!authHeader  ||  !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Authentication invalid')
    }
    const token = authHeader.split(' ')[1]      //--> spliting it on empty value and adding it a 1
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
     // attach the user to the job routes   

    const user = User.findById(payload.id).select('-password')      //--> select is used to remove the password-->
    req.user  = user    //--> the 2 lines are for the incase we are looking into the database then it will help us out 

     req.user = {userId: payload.userId, name: payload.name }
     next()
    }
    catch(errror){
        throw new UnauthenticatedError('Authentication invalid')
    }
 }

 //--> export the auth n invoke the next as well
 module.exports =  auth;