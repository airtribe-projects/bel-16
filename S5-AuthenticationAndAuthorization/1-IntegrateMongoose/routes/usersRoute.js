const express = require('express');
const {loginUser, registerUser} = require('../controllers/usersController');
const router = express.Router()

router.post('/register', async(req, res) => {
    const user = req.body;
    const dbUser = await registerUser(user);
    res.send(dbUser);
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const token = await loginUser(email, password);
    res.send(token);
})

module.exports = router;