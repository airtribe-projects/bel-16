const courses = require("../models/coursesModel");

const getAllCourse =  () => {
    let allCourses;
    
    for (let i =0; i< 1000; i++) {
        allCourses = courses.find();
    }
    
    // return courses.find();
    return allCourses;
}

const getACourse =  (courseId) => {
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createACourse =   (course) => {
    return courses.create(course);;
}

module.exports = {getAllCourse, getACourse, createACourse};