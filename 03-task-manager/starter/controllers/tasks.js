const router = require("../routes/tasks")

const getAllTasks = (req,res)=>{          //--> hardCoding the get method __
     res.send('get all the task')
    }

const createTask = (req,res)=>{         
    res.json(req.body) 
    }    

const getTask = (req,res)=>{         
    res.json({ id:req.params.id })               //-->{{URL}}/tasks/hello   --> will get a ns anwer { "id":"hello"}
    }    

const updateTask = (req,res)=>{         
    res.send('update task') 
    }    

const deleteTask = (req,res)=>{         
    res.send('delete task') 
    }    

    module.exports = { getAllTasks,
                       createTask,
                       getTask, 
                       updateTask,
                       deleteTask}