
const express = require('express');
const { mpesaPassword,token,stkPush } = require('../../controller/mpesaController');
const auth = require('../../middleware/auth');
const router = express.Router();
router.get('/password',mpesaPassword);

router.post('/',auth, token,stkPush);

module.exports = router;