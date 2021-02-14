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

    console.log ( 'new task created', createTask)
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

router.delete('/:id',async (req,res) => {
const id = req.params.id

try {
  const arrayTasksDB= await taskmodel.findByIdAndRemove ({_id: id})
  console.log (arrayTasksDB)

  res.render ('/listtodo', {
    taskId: readId,
    error: false
  })

  if (!arrayTasksDB) {
    res.json({
        status: false,
        message: 'No se puede eliminar'
    })
} else {
    res.json({
        status: true,
        message: 'eliminado!'
    })
}

} catch (error) {
console.log(error)
}

})

router.put ('/:id',async (req,res) => {
  const id = req.params.id
  const body= req.body

  try {
    const edittaskDB= await taskmodel.findByIdAndUpdate (id,body, {useFindAndModify: false})
    console.log (edittaskDB)

    res.json ({
      status: true,
      message: 'task editated'
    })
  }catch (e) {
    console.log(e)

    res.json ({
      status: true,
      message: 'we failed'
    })
  }

})

module.exports= router; 