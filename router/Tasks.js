const express= require ('express')
const router= express.Router();

const taskDate= require ( '../models/taskmodel')

router.get("/", async (req, res) => {
  
    try {
      const arrayTasksDB = await taskDate.find();
      console.log(arrayTasksDB);
      res.render("listtodo", {
        arrayTasks: arrayTasksDB,
        listtodoTitle: "List of tasks",
      });
    } catch (e) {
      console.log(e);
    }
  });

module.exports= router; 