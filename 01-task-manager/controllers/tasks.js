const Task = require('../models/Task');
const asyncwrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncwrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({
        tasks,
    });


    // res.status(200).json({
    //     msg: 'Get All Task Controller',
    //     data: task,
    // })
})

// Status 201 is for successful POST request
const createTask = asyncwrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        task,
    })

    // res.status(201).json({
    //     msg: 'Create Task Controller',
    //     data: task,
    // })
})

const getTask = asyncwrapper(async (req, res, next) => {

    // Get me ID form req.params with alias taskID
    const { id: TaskID } = req.params;
    const task = await Task.findOne({ _id: TaskID });

    if (!task) {
        return next(createCustomError(`No task with id ${TaskID} found`, 404));
    }

    // res.status(200).json({
    //     msg: 'Get Single Task',
    //     id: req.params.id,
    //     data: task,
    // })

    res.status(200).json({
        task,
    })

})

const updateTask = asyncwrapper(async (req, res, next) => {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });

    // We added new true so that in our output in Post man API we get new updated value instead of the previous one
    // We added runValidators to true so that we can run the validator described in the models/Task.js

    if (!task) {
        return next(createCustomError(`No task with id ${taskID} found`, 404));
    }

    // res.status(200).json({
    //     id: taskID,
    //     data: tasks,
    // })

    res.status(200).json({
        task,
    })

})

const deleteTask = asyncwrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task with id ${taskID} found`, 404));
    }
    // res.status(200).json({
    //     msg: 'Delete Controller Initiated and Completed',
    //     id: taskID,
    // })

    res.status(200).json({
        task
    })
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}