const express= require ('express')
const router= express.Router();

const taskDate= require ( '../models/taskmodel')


router.get ('/',async (req,res) => {

    try {
        const arrayTasksDB= await taskDate.find()
        console.log (arrayTasksDB)
        res.render  ("Tasks", {
            arrayTasksDB: arrayTasksDB
         }) 
       
        }
         catch (e) {
        console.log (e)
     }
    
     
})

module.exports= router; 