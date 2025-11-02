const express = require('express');

const app = express();
const mainLog = (req, res, next) => {
    console.log("Request received on", JSON.stringify(req.originalUrl));  
    next()
}

const secondLogger = (req, res, next) => {
    console.log("BaseLogger Request received on", JSON.stringify(req.baseUrl));  
    next()
}

app.use([mainLog, secondLogger] );


const courses= [
  {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]



const getAllCourses = (req, res, next) => {
  
  req.data = courses;
  next();
  // res.send(courses);
}



const responseFormatter = (req, res) => {
  res.send({
      status: 200, 
      data: req.data,
      erro: null
  })
}


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

params = [];




app.get('/api/v1/courses/', getAllCourses, responseFormatter  )

app.use(secondLogger);

app.get('/api/v1/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).send("Course not found");
  }
  
  res.send(course);
})

// Health Check API Endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




