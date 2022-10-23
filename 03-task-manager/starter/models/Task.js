const  mongoose = require('mongoose');

//--> setting the new variable as taskSchema---> this will crete a  atlas automatically like i only want <name>
//-->just like setting up the stucrture for the key value players-->
// const TaskSchema = new mongoose.Schema({        //--> creting a new constructor 
//    name:String,completed:Boolean
// })                     //-->Basic Schema




//-->adding the validation to the schema 
const TaskSchema = new mongoose.Schema({
    name: {        //--> basic validator 
        type:String,
        required:[true, 'must provide name'],
        trim:true,             //--> to remove extra spaces -->
        maxlength:[20, 'name cannot be more then 20 characters']
    },
    completed: {
        type:Boolean,
        default:false         
    }
})



//-->> using th emodel we will be able updat edelete delete cretet query
module.exports = mongoose.model('Task', TaskSchema)   //--> model looking for the schema --> ie.name & Schema