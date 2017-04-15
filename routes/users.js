const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send('Register');
});

// Login
router.post('/login', (req, res, next) => {
    res.send('Login');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

// Login
router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = router;