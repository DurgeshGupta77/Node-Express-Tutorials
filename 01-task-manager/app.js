const express = require('express');

const app = express();
const tasks = require('./routes/tasks');

//Since we need access of our JSON file in req.body, we need to use built-in middleware express.json() 
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})