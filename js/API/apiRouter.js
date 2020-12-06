const express = require('express');
const fileRouter = require('./routerFile');
const userRouter = require('./routerUser');
const folderRouter = require('./routerFolder');

const router = express.Router();
router.use('/files', fileRouter);
router.use('/users', userRouter);
router.use('/folders', folderRouter);

module.exports = router;