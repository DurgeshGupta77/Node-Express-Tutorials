const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({});
        res.status(200).json({
            msg: 'Get All Task Controller',
            data: task,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error in Get All Task Controller',
            error: error.message,
        })
    }
    res.send('Get All Tasks');
}

// Status 201 is for successful POST request
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({
            msg: 'Create Task Controller',
            data: task,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error in Create Task Controller',
            error: error.message,
        })
    }
}

const getTask = async (req, res) => {

    try {
        // Get me ID form req.params with alias taskID
        const { id: TaskID } = req.params;
        const task = await Task.findOne({ _id: TaskID });

        if (!task) {
            return res.status(400).json({
                msg: `No ID ${TaskID} found in Get Single Task`,
            })
        }

        res.status(200).json({
            msg: 'Get Single Task',
            id: req.params.id,
            data: task,
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Error in Get Single Task Controller',
            error: error.message,
        });
    }

}

const updateTask = (req, res) => {
    res.send('Update Task');
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({
                msg: `No ID with ${taskID} found in Delete Controller`,
            })
        }
        res.status(200).json({
            msg: 'Delete Controller Initiated and Completed',
            id: taskID,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error in Delete Controller',
            error: error.message,
        })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}