require('dotenv').config();

const express = require('express');
const {mainLogger, secondLogger} = require('./middlewares/loggerMiddleware');
const coursesRouter = require('./routes/coursesRoute');


const app = express();
// Using Middlewares
app.use(express.json());
app.use([mainLogger, secondLogger] );

// Mounting routes
app.use("/api/v1/courses", coursesRouter);

// Health Check API Endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});