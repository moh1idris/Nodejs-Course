// const getAllJobs = async (req, res)=>{
//     res.send('get all jobs')
// }
// const getJobs = async (req, res)=>{
//     res.send('get jobs')
// }
// const createJobs = async (req, res)=>{
//     res.send('create jobs')
// }
// const updateJobs = async (req, res)=>{
//     res.send('update jobs')
// }
// const deleteJobs = async (req, res)=>{
//     res.send('delete jobs')
// }
// module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}


//--> after settting the middleware to the app js-->
// const getAllJobs = async (req, res)=>{
//     res.send('get all jobs')
// }
// const getJobs = async (req, res)=>{
//     res.send('get jobs')
// }
// const createJobs = async (req, res)=>{
//     // res.json(req.user)  //-->req.user is taken from the authenticationfile                   //{{url}}/jobs--> testing the jobs by adding gthe authenticatetion
//     res.json(req.body)     //--> here we ar passing th ecompnay n position as well
// }
// const updateJobs = async (req, res)=>{
//     res.send('update jobs')
// }
// const deleteJobs = async (req, res)=>{
//     res.send('delete jobs')
// }
// module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}


//--> after setting the authentication as well as model-jobs
// const Job = require('../models/Job')
// const { StatusCodes } = require('http-status-codes')
// const { BadRequestError, NotFoundError } = require('../errors')

// const getAllJobs = async (req, res)=>{
//     res.send('get all jobs')
// }
// const getJobs = async (req, res)=>{
//     res.send('get jobs')
// }
// const createJobs = async (req, res)=>{
//     req.body.createdBy = req.user.userId       //--> here  the loction is been done
//     const job = await Job.create(req.body) 
//     res.status(StatusCodes.CREATED).json({ job })     //--> this wil lgive u the userid,cretedBy,cretedAt,updatedAt,company,position,status
// }
// const updateJobs = async (req, res)=>{
//     res.send('update jobs')
// }
// const deleteJobs = async (req, res)=>{
//     res.send('delete jobs')
// }
// module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}
//--> createdob working fine 


//--> adding up th other functionality -->
// const Job = require('../models/Job')
// const { StatusCodes } = require('http-status-codes')
// const { BadRequestError, NotFoundError } = require('../errors')
// const getAllJobs = async (req, res)=>{
//     const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
//     res.status(StatusCodes.OK).json({jobs, count:jobs.length})        //--> this will get all the data which u just creted ...bhut u need to add th ejson.token in it 
// }  

// const getJobs = async (req, res)=>{
//     res.send('get a Singlejobs')
// }
// const createJobs = async (req, res)=>{
//     req.body.createdBy = req.user.userId       //--> here  the loction is been done
//     const job = await Job.create(req.body) 
//     res.status(StatusCodes.CREATED).json({ job })     //--> this wil lgive u the userid,cretedBy,cretedAt,updatedAt,company,position,status
// }
// const updateJobs = async (req, res)=>{
//     res.send('update jobs')
// }
// const deleteJobs = async (req, res)=>{
//     res.send('delete jobs')
// }
// module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}
 
//--> just u can also set that by using dynamically ...->>
//--> go to th eauth/login--> add theis in the <tests>
            // const jsonData = pm.response.json()
            // pm.globals.set("accessToken", jsonData.token);    -->send  we also do it in the register--user



//-->Here we are adding the functionality of th eget Single Job
// const Job = require('../models/Job')
// const { StatusCodes } = require('http-status-codes')
// const { BadRequestError, NotFoundError } = require('../errors')
// const getAllJobs = async (req, res)=>{
//     const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
//     res.status(StatusCodes.OK).json({jobs, count:jobs.length})        //--> this will get all the data which u just creted ...bhut u need to add th ejson.token in it 
// }  

// const getJobs = async (req, res)=>{
//     const { user:{userId},params:{id:jobId}} = req   //--> destrucring the user id 
//     const job = await Job.findOne({
//         _id:jobId,createdBy:userId})
//         if(!job){
//             throw new NotFoundError(`No job with id ${jobId}`)
//         }
//         res.status(StatusCodes.OK).json({ job })
// }

// const createJobs = async (req, res)=>{
//     req.body.createdBy = req.user.userId       //--> here  the loction is been done
//     const job = await Job.create(req.body) 
//     res.status(StatusCodes.CREATED).json({ job })     //--> this wil lgive u the userid,cretedBy,cretedAt,updatedAt,company,position,status
// }
// const updateJobs = async (req, res)=>{
//     res.send('update jobs')
// }
// const deleteJobs = async (req, res)=>{
//     res.send('delete jobs')
// }
// module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}

// //---> after implementing the update job -->
// const Job = require('../models/Job')
// const { StatusCodes } = require('http-status-codes')
// const { BadRequestError, NotFoundError } = require('../errors')
// const getAllJobs = async (req, res)=>{
//     const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
//     res.status(StatusCodes.OK).json({jobs, count:jobs.length})        //--> this will get all the data which u just creted ...bhut u need to add th ejson.token in it 
// }  
// const getJobs = async (req, res)=>{
//     const { user:{userId},params:{id:jobId}} = req   //--> destrucring the user id 
//     const job = await Job.findOne({
//         _id:jobId,createdBy:userId})
//         if(!job){
//             throw new NotFoundError(`No job with id ${jobId}`)
//         }
//         res.status(StatusCodes.OK).json({ job })
// }
// const createJobs = async (req, res)=>{
//     req.body.createdBy = req.user.userId       //--> here  the loction is been done
//     const job = await Job.create(req.body) 
//     res.status(StatusCodes.CREATED).json({ job })     //--> this wil lgive u the userid,cretedBy,cretedAt,updatedAt,company,position,status
// }
// const updateJobs = async (req, res)=>{
//     const { 
//     body: {company, position},    
//     user: {userId},
//     params: { id: jobId },
// } = req 
// if(company === ''  ||  position === ''){
//     throw new BadRequestError('Company or  Position feilds cannot be empty')
// }
// const job = await Job.findByIdAndUpdate(
//     {_id: jobId,
//     createdBy: userId },
//     req.body, 
//     {new: true, runValidators: true})
//     if(!job){
//         throw new NotFoundError(`No job with id ${jobId}`)
//         }
//         res.status(StatusCodes.OK).json({ job })
// // res.send('update  jobs')
// }
// const deleteJobs = async (req, res)=>{
//     res.send('delete jobs')
// }
// module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}



//--> adding the delete -->

//---> after implementing the update job -->
const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllJobs = async (req, res)=>{
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count:jobs.length})        //--> this will get all the data which u just creted ...bhut u need to add th ejson.token in it 
}  

const getJobs = async (req, res)=>{
    const { user:{userId},params:{id:jobId}} = req   //--> destrucring the user id 
    const job = await Job.findOne({
        _id:jobId,createdBy:userId})
        if(!job){
            throw new NotFoundError(`No job with id ${jobId}`)
        }
        res.status(StatusCodes.OK).json({ job })
}

const createJobs = async (req, res)=>{
    req.body.createdBy = req.user.userId       //--> here  the loction is been done
    const job = await Job.create(req.body) 
    res.status(StatusCodes.CREATED).json({ job })     //--> this wil lgive u the userid,cretedBy,cretedAt,updatedAt,company,position,status
}
const updateJobs = async (req, res)=>{
    const { 
    body: {company, position},    
    user: {userId},
    params: { id: jobId },
} = req 
if(company === ''  ||  position === ''){
    throw new BadRequestError('Company or  Position feilds cannot be empty')
}
const job = await Job.findByIdAndUpdate(
    {_id: jobId,
    createdBy: userId },
    req.body, 
    {new: true, runValidators: true})
    if(!job){
        throw new NotFoundError(`No job with id ${jobId}`)
        }
        res.status(StatusCodes.OK).json({ job })
// res.send('update  jobs')
}
const deleteJobs = async (req, res)=>{
    const { user:{userId},params:{id:jobId}} = req   
    const job = await Job.findByIdAndRemove({
        _id:jobId,
        createdBy: userId
    })
    if(!job){
        throw new BadRequestError('Company or  Position feilds cannot be empty')
    }
    res.status(StatusCodes.OK).send()
}
module.exports = { getAllJobs ,getJobs , createJobs , updateJobs , deleteJobs}