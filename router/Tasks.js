const express= require ('express');
const tasksModels = require('../models/taskmodel');
const router= express.Router();

const taskmodel= require ( '../models/taskmodel')

router.get("/", async (req, res) => {
  
    try {
      const arrayTasksDB = await taskmodel.find();
      console.log(arrayTasksDB);
      res.render("listtodo", {
        arrayTasks: arrayTasksDB,
        listtodoTitle: "List of tasks",
      });
    } catch (e) {
      console.log(e);
    }
  });

  router.get ('/addTask', (req,res) => {
    res.render ('addTask')
  })

  router.post('/', async (req, res) => {
  const body= req.body

  try { 
    const createTask= new taskmodel  (body)
    await createTask.save()

    console.log ( 'new task created', arrayTasksDB)
    res.redirect('/listtodo')
  } catch (e) {
    console.log (e)
  }
})

router.get ('/:id', async (req,res) => {

  const id= req.params.id 

  try {
    const readId= await taskmodel.findOne({ _id: id })
    console.log (readId)
  
    res.render ('editPage', {
      taskId: readId,
      error: false
    }, )
  } catch (e) {
    console.log (e)
    
    res.render ('editPage', {
      error: true,
      message: 'the id is not found'
    })
  }

})


module.exports= router; 