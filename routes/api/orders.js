// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// var db = require('../../server');
// router.use(bodyParser.json());
//
// router.get('/', function(req, res, next) {
//     var sql = "SELECT * FROM orders";
//     db.query(sql, function(err, rows, fields) {
//         if (err) {
//             res.status(500).send({ error: 'Something failed!' });
//         }
//         res.json(rows);
//     })
// });
//
// module.exports = router;
