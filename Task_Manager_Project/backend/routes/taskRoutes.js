
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");


router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


router.post("/", async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  const savedTask = await newTask.save();
  res.json(savedTask);
});


router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});


router.put('/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
      );
      res.json(updatedTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;