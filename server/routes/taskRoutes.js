const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

router.get("/tasks", controller.getTasks);
router.post("/task", controller.createTask);
router.put("/task/:id", controller.updateTask);
router.delete("/task/:id", controller.deleteTask);

module.exports = router;
