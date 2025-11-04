const express = require('express');
const {getAllCourses, getCourseById, createACourse} = require('../controllers/coursesController');
const router = express.Router()

router.get('/', getAllCourses)
router.post('/', createACourse)
router.get('/:id', getCourseById)

module.exports = router;