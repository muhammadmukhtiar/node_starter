const express = require('express');
const router = express.Router();
var userRoute = require('./userRoute');

router.use('/user', userRoute);
module.exports = router;
