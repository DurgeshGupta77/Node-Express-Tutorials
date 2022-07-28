const express = require('express');

const app = express();
const tasks = require('./routes/tasks');

const connectDB = require('./db/connect');

require('dotenv').config();

//Since we need access of our JSON file in req.body, we need to use built-in middleware express.json() 
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start();
