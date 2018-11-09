const express = require('express');
const ChirpsRouter = require('./chirps')
let router = express.Router();

//INdex.js should take all your routes, and export them to serverJS as one route.

router.use('/chirps', ChirpsRouter);


module.exports = router;