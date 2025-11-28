import express from "express";
import { taskController } from "../controller/tasksController.js";
import { validateCreateTask } from "../validations/tasksValidation.js";
import { protect } from "../middleware/tasksProtect.js";

// New Router
const taskRouter = express.Router();

// Use this before routing to controllers
taskRouter.use(protect);

taskRouter
  .route("/tasks")
  .get(taskController.getAllTasks)
  .post(validateCreateTask, taskController.createTask);

taskRouter
  // GET by ID
  .get("/tasks/:id", taskController.getById)
  // UPDATE
  .put("/tasks/:id", validateCreateTask, taskController.updateById)
  // DELETE
  .delete("/tasks/:id", taskController.deleteById);

export { taskRouter };
