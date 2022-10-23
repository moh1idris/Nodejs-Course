// const express = require('express');
// const router = express.Router();       //--> setting up the router 

// router.route('/').get((req,res)=>{          //--> hardCoding the get method __
//  res.send('all items')
// })

// module.exports = router




const express = require('express');
const router = express.Router();       //--> setting up the router 
const { getAllTasks , 
        createTask ,
        getTask , 
        updateTask , 
        deleteTask ,
        // editTask
    } = require('../controllers/tasks')   //--> importing the methods from the tasks.controller

router.route('/').get(getAllTasks).post(createTask)       //--> this has only api/v1
router
.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)
//.put(editTask)     //--> this has api/v1/:id


module.exports = router