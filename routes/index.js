var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var db = require('../server');
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM orders";
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.render('web_view/orders/index', { title:'Orders', orders:rows});
    // res.json(rows)
  })
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM orders WHERE id=${id}`;
  db.query(sql, function(err, rows, fields) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.render('web_view/orders/list', { title:'Orders', orders:rows[0]});
    // res.json(row[0])
  })
});

module.exports = router;
