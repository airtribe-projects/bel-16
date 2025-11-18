const courses = require('../models/coursesModel');

const getAllCourses = (req, res, next) => {
  req.data = courses;
  res.send(courses);
}

const createACourse = (req, res) => {
    const course = req.body;
    console.log("Received course", course);
    course["id"] = Math.round(Math.random()*100000);
    courses.push(course);
    res.send(course);
}

const getCourseById = (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    return res.status(404).send("Course not found");
  }
  
  res.send(course);
}

module.exports = {
    createACourse,
    getAllCourses,
    getCourseById
}