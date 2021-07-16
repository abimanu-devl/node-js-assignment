const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
}, {
    timestamps: true 
});

const ToDoList = mongoose.model('todolist', todoSchema)
module.exports = ToDoList;