var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'g123456789',
    database: 'new'
})
/* GET home page. */
router.get('/nav', function(req, res, next) {
    connection.query('SELECT id,navName FROM xinwen', function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(rows);
    })
});
router.post('/new', function(req, res, next) {
    connection.query('SELECT * FROM xinwen WHERE id=' + req.body.id + '', function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(rows);
    })
})
module.exports = router;