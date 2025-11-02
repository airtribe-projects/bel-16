const express = require('express');

const app = express();

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




app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 
app.get('/api/v1/courses/', (req, res) => {
  console.log(req.query);
  // Option 3: req.query
  
  res.send(courses);
})

// app.get('/api/v1/courses/0', (req, res) => {
//   console.log(req.query);
//   // Option 3: req.query
  
//   res.send(courses[0]);
// })


// app.get('/api/v1/courses/1', (req, res) => {
//   console.log(req.query);
//   // Option 3: req.query
  
//   res.send(courses[1]);
// });

app.get('/api/v1/courses/:id', (req, res) => {
  console.log(req.params);
  // console.log(req.query);
  // Option 3: req.query
  
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
     res.send("Course not found");
  }
  
  res.send(course);
})


// app.get('/api/v1/courses/ratings', (req, res) => {
//   // console.log("Entered Ratings");
//   console.log(req.params);
//   // res.send("Reached Ratings")
// });





// app.listeners
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


