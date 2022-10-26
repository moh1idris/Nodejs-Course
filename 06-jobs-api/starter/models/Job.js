const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required: [true, 'please provide company'],
        manlength: 50
    },
    position:{
        type:String,
        required:[true, 'please provide position'],
        manlength: 100
    },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default: 'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: 'User',     //--> specifiying which model is refering 
        required:[true,'Please provide user']
    }
},{timestamps:true})

module.exports = mongoose.model('Job', JobSchema)