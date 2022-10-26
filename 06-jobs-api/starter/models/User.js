// const mongoose = require('mongoose')
// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required:[true, 'please provide name'],
//         minlength: 3,
//         maxlength: 50,
//     },
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: [true, 'please provide email'],
//         match:  [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email address',]
//     },
//     password: {
//         type: String,
//         required:[true, 'please provide password'],
//         minlength: 6,
//         // maxlength: 12,      //--> removing this because as we add HASH it will bigger its length
//     },
// })
// module.exports = mongoose.model('User', UserSchema)



const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'please provide name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'please provide email'],
        match:  [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email address',]
    },
    password: {
        type: String,
        required:[true, 'please provide password'],
        minlength: 6,
        // maxlength: 12,      //--> removing this because as we add HASH it will bigger its length
    },
})
//--> adding it so that it doesn't have u add it up over the controller 
// UserSchema.pre('save', async function(next){
//    const salt = await bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password,salt)
//    next()
// }),                        //--> seeting the password here itself & adding  n nmakinh it as hashed 

//--> after remove the next()-->
UserSchema.pre('save', async function  (){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
 })                     //--> seeting the password here itself & adding  n nmakinh it as hashed 

 //--> adding up the schema -->this is 20402
// UserSchema.methods.getName = function (){          //--> here we are going with regular func
//      return this.name                   //--> this will always point to the document here itself -->
// }

//-->addin the token here only creting it here -->295295
// UserSchema.methods.createJWT = function () {
//    return jwt.sign({userId:this._id, name: this.name},
//     'jwtSecret', 
//     {expiresIn:'30d'},
//    )
// }


//--> after adding the secret in th .env file -->same as able but adding the .env file 
UserSchema.methods.createJWT = function () {
    return jwt.sign({userId:this._id, name: this.name},
     process.env.JWT_SECRET, 
     {expiresIn: process.env.JWT_LIFETIME})
 }


 //--> compare hash-passord --> making an instance-->789789
 UserSchema.methods.comparePassword = async function (candidatePassword){
     const isMatch = await bcrypt.compare(candidatePassword, this.password)
     return isMatch
 }


module.exports = mongoose.model('User', UserSchema)




