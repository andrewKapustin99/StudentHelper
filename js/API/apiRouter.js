const express = require('express');
const fileRouter = require('./routerFile');
const userRouter = require('./routerUser');

const router = express.Router();
router.use('/files', fileRouter);
router.use('/users', userRouter);

module.exports = router;
