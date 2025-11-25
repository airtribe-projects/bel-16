require('dotenv').config();

const mongoose = require('mongoose');

const express = require('express');
const {mainLogger, secondLogger} = require('./middlewares/loggerMiddleware');
const coursesRouter = require('./routes/coursesRoute');
const usersRouter = require('./routes/usersRoute');
const PORT = process.env.PORT

const app = express();
// Using Middlewares
app.use(express.json());
app.use([mainLogger, secondLogger] );

// Mounting routes
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/users", usersRouter);

// Health Check API Endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB is Connected")
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})

