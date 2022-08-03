const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Middleware!');
    res.send('<h1>Hello from Express home page</h1>');
});

module.exports = router;