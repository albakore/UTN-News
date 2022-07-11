var express = require('express');
const { response } = require('../app');
var router = express.Router();
var pool = require('../db');

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.post('/getLike', async function(req, res, next) {
    let {id_user,id_news} = req.body;
    const result = pool.query('SELECT id_news,like_counter FROM social_likebutton WHERE id_user = ? and id_news = ? ORDER BY id_news LIMIT 1',[id_user,id_news], (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          res.json(err);
        }
      })
});

router.post('/insertLike', async function(req, res, next) {
    let {id_news, id_user, like_counter} = req.body;
    const result = pool.query('INSERT INTO social_likebutton VALUES (?,?,?)', [id_news,id_user,like_counter], (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          res.json(err);
        }
      })
});

router.post('/insertSocial', async function(req, res, next) {
    let {id_news} = req.body;
    const result = pool.query('INSERT INTO social_clickscounter VALUES (?)', [id_news], (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          res.json(err);
        }
      })
});

module.exports = router;