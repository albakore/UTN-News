var express = require('express');
const { response } = require('../app');
var router = express.Router();
var pool = require('../db');

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.get('/test', async function(req, res, next) {
    const result = await pool.query('SELECT NOW()');
});
module.exports = router;