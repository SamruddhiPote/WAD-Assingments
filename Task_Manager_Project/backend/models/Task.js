
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    category: { type: String, enum: ['work', 'personal', 'shopping', 'other'], default: 'other' },
    dueDate: { type: Date },
    priority: { type: Number, enum: [1, 2, 3], default: 2 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", TaskSchema);