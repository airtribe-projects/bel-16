const express = require('express');
const {getAllCourses, getCourseById, createACourse} = require('../controllers/coursesController');
const {validateJWT} = require('../middlewares/authMiddleware');
const router = express.Router()

router.get('/', getAllCourses)
router.post('/', validateJWT, createACourse)
router.get('/:id', getCourseById)

module.exports = router;