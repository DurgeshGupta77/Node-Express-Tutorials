const getAllTasks = (req, res) => {
    res.send('Get All Tasks');
}

const createTask = (req, res) => {
    res.json({
        msg: 'Create Task Controller',
        data: req.body.name,
    })
}

const getTask = (req, res) => {
    res.json({
        msg: 'Get Single Task',
        id: req.params.id,
    })
}

const updateTask = (req, res) => {
    res.send('Update Task');
}

const deleteTask = (req, res) => {
    res.send('Delete Task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}