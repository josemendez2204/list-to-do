const mongoose= require ('mongoose')
const Schema= mongoose.Schema;

const taskElement= new Schema ( {
    date : String,
    task: String
})

const tasksModels= mongoose.model('taskModels', taskElement);

module.exports= tasksModels;