// const router = require("../routes/tasks")

// const getAllTasks = (req,res)=>{          //--> hardCoding the get method __ 
//      res.send('get all the task')
//     }

// const createTask = (req,res)=>{         
//     res.json(req.body) 
//     }    

// const getTask = (req,res)=>{         
//     res.json({ id:req.params.id })               //-->{{URL}}/tasks/hello   --> will get a ns anwer { "id":"hello"}
//     }    

// const updateTask = (req,res)=>{         
//     res.send('update task') 
//     }    

// const deleteTask = (req,res)=>{         
//     res.send('delete task') 
//     }    

//     module.exports = { getAllTasks,
//                        createTask,
//                        getTask, 
//                        updateTask,
//                        deleteTask}








// //-->model is creted so adding the other stuff
                    // const router = require("../routes/tasks")

                    // const Task = require('../models/Task')    //--> 

                    // // const getAllTasks = (req,res)=>{          //--> hardCoding the get method __
                    // //      res.send('get all the task')
                    // //     }




                    // //-->try catch to get all the task just like find
                    // const getAllTasks = async (req,res)=>{          
                    // try {
                    //     const tasks = await Task.find({})
                    //     res.status(200).json({tasks})
                    //     // res.status(200).json({tasks, amount:tasks.lenght})
                    //     // res.status(200).json({ success :"success", data: {tasks, nbHits:tasks.lenght} })
                    // } catch (error) {
                    //     res.status(500).json({ msg: error })
                    // }    
                    //     }

                    // // const createTask = async (req,res)=>{         
                    // //     const task = await Task.create({name:'first task'})   //--> hardcoding the value
                    // //     res.json(req.body) 
                    // //     }    

                    // // const createTask = async (req,res)=>{         
                    // //     const task = await Task.create(req.body)   //--> hardcoding the value
                    // //     res.status(201).json({ task })           //--> pasiing the object->task
                    // //     }                ///--. go to the post man c execute it -->just by just changing the name n completetd 
                    // //--> after this when u go to database n check a colloction is been creted 

                    // //--> always try to add try catch --> 
                    // const createTask = async (req,res)=>{    
                    //     try {
                    //         const task = await Task.create(req.body)   //--> hardcoding the value
                    //         res.status(201).json({ task })           //--> pasiing the object->task
                    //     } catch (error) {
                    //         res.status(500).json({ msg: error })
                    //     }     
                    // }     


                    // // const getTask = (req,res)=>{         
                    // //     res.json({ id:req.params.id })               //-->{{URL}}/tasks/hello   --> will get a ns anwer { "id":"hello"}
                    // //     }    

                    // const getTask = async (req,res)=>{  
                    //     try {
                    //         const {id:taskID} = req.params
                    //         const task = await Task.findOne({_id:taskID}) ;           //-->. this will be able to find the one with id 
                    //         if(!task){
                    //             return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
                    //         }
                    //         res.status(200).json({ task })              
                    //     } catch (error) {
                    //         res.status(500).json( {msg: error})      ///--> this is just like genetri  one 
                    //     }
                    //     }    




                        
                    //     // const deleteTask = (req,res)=>{         
                    // //     res.send('delete task') 
                    // //     }    


                    // const deleteTask = async (req,res)=>{   //-->go here will find the methiod https://mongoosejs.com/docs/queries.html
                    //     try {
                    //     const {id:taskID} = req.params
                    //     const task = await Task.findOneAndDelete({_id: taskID})
                    //     if(!task){
                    //         return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
                    //     }
                    //     res.status(200).json({ task })  
                    //     //res.status(500).send()     
                    //     // res.sendstatus(200).json({task: null, status : 'success'}) 
                    // } catch (error) {
                    //     res.status(500).json( {msg: error})      ///--> this is just like genetri  one  
                    // }      
                    // }    




                    // const updateTask = async (req,res)=>{
                    //     try {
                    //         const {id:taskID} = req.params;
                    //         const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
                    //             new:true,
                    //             runValidators:true,
                    //         })
                    //         if(!task){
                    //             return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
                    //         }
                    //         res.status(200).json({task})    //--> here the ID will be same a staskId--> n data will be from jsonBody        
                    //         } catch (error) {
                    //             res.status(500).json( {msg: error})      ///--> this is just like genetri  one  
                    //         }         
                    
                    //     }//--> in oatch we are passing th eproperties which we are passing in     
                    // const editTask = async (req,res)=>{
                    //     try {
                    //         const {id:taskID} = req.params;
                    //         const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
                    //             new:true,
                    //             runValidators:true,
                    //             overwrite: true,
                    //         })
                    //         if(!task){
                    //             return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
                    //         }
                    //         res.status(200).json({task})    //--> here the ID will be same a staskId--> n data will be from jsonBody        
                    //         } catch (error) {
                    //             res.status(500).json( {msg: error})      ///--> this is just like genetri  one  
                    //         }         
                    //     }    

                    //     module.exports = { getAllTasks,
                    //                     createTask,
                    //                     getTask, 
                    //                     updateTask,
                    //                     deleteTask,
                    //                     //    editTask
                    //                     }










// //---> setting the middleWare --> async file & error-handler file
// const router = require("../routes/tasks")
// const Task = require('../models/Task')    //--> 
// const asyncWrapper = require("../middleware/async")                    //--> importing and navigating o that partiulat folder
// const errorHandlerMiddleware = require('../middleware/error-handler')
// const { createCustomError } = require('../errors/custom-error')

// const getAllTasks = asyncWrapper( async (req,res)=>{          
//     const tasks = await Task.find({})
//     res.status(200).json({tasks}) 
//     })

// const createTask =  asyncWrapper(async (req,res)=>{    
//         const task = await Task.create(req.body)   //--> hardcoding the value
//         res.status(201).json({ task })           //--> pasiing the object->task     
// })     

// const getTask = asyncWrapper(async (req,res,next)=>{  
//         const {id:taskID} = req.params
//         const task = await Task.findOne({_id:taskID}) ;           //-->. this will be able to find the one with id 
//         if(!task){
//            const error =  new Error('Not Found')
//            error.status = 404;
//            return next(error)          //--> here we create da error object and that id likend to the error-handler.js 
//            return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
//         }
//         res.status(200).json({ task })              
//     })    

// const deleteTask = asyncWrapper(async (req,res)=>{                                               //-->go here will find the methiod https://mongoosejs.com/docs/queries.html
//        const {id:taskID} = req.params
//        const task = await Task.findOneAndDelete({_id: taskID})
//        if(!task){
//         return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
//     }
//     res.status(200).json({ task })    
// })    

// const updateTask = asyncWrapper( async (req,res)=>{
//         const {id:taskID} = req.params;
//         const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
//             new:true,
//             runValidators:true,
//         })
//         if(!task){
//             return res.status(404).json({msg: `No task with id : ${taskID}`})             //--> alawyas always use return
//         }
//         res.status(200).json({task})                                                     //--> here the ID will be same a staskId--> n data will be from jsonBody        
//     })//--> in Patch we are passing the properties which we are passing in     

//     module.exports = { getAllTasks,
//                        createTask,
//                        getTask, 
//                        updateTask,
//                        deleteTask,
//                     }








//-->after creating the errors-Folder--> and custom-error--> File

const router = require("../routes/tasks")
const Task = require('../models/Task')    //--> 
const asyncWrapper = require("../middleware/async")                    //--> importing and navigating o that partiulat folder
const errorHandlerMiddleware = require('../middleware/error-handler')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req,res)=>{          
    const tasks = await Task.find({})
    res.status(200).json({tasks}) 
    })

const createTask =  asyncWrapper(async (req,res)=>{    
        const task = await Task.create(req.body)   //--> hardcoding the value
        res.status(201).json({ task })           //--> pasiing the object->task     
})     

const getTask = asyncWrapper(async (req,res,next)=>{  
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID}) ;           //-->. this will be able to find the one with id 
        if(!task){
            //--> as i have created a cutom error file in it th eerrors are handeld
            return next(createCustomError(`No task with id : ${taskID}`,404))
        }
        res.status(200).json({ task })              
    })    

const deleteTask = asyncWrapper(async (req,res)=>{                                               //-->go here will find the methiod https://mongoosejs.com/docs/queries.html
       const {id:taskID} = req.params
       const task = await Task.findOneAndDelete({_id: taskID})
       if(!task){
           //--> as i have created a cutom error file in it th eerrors are handeld
           return next(createCustomError(`No task with id : ${taskID}`,404))
    }
    res.status(200).json({ task })    
})    

const updateTask = asyncWrapper( async (req,res)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){           
            //--> as i have created a cutom error file in it th eerrors are handeld
            return next(createCustomError(`No task with id : ${taskID}`,404))
        }
        res.status(200).json({task})                                                     //--> here the ID will be same a staskId--> n data will be from jsonBody        
    })//--> in Patch we are passing the properties which we are passing in     

    module.exports = { getAllTasks,
                       createTask,
                       getTask, 
                       updateTask,
                       deleteTask,
                    }