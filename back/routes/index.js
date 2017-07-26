var express = require('express');
var router = express.Router();
var http = require('http');

router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/banner', function (req, res, next) {
  var time = new Date().getTime;

  http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time, function (response) {

    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })

  })

})

router.get('/hotmovie', function (req, res, next) {
  var time = new Date().getTime;
  var page = req.query.page;
  var count = req.query.count;
  http.get('http://m.maizuo.com/v4/api/film/now-playing?__t=' + time + '&page=' + page + '&count=' + count, function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })

  })
})

router.get('/comesoon', function (req, res, next) {
  var time = new Date().getTime;
  var page = req.query.page;
  var count = req.query.count;
  http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t=' + time + '&page=' + page + '&count=' +count, function(response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })
})

router.get('/comelist', function (req, res, next) {
  var page = req.query.page;
  var count = req.query.count;
  http.get('http://m.maizuo.com/v4/api/film/coming-soon?page=' + page + '&count=' +count, function(response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })
})

router.get('/hotlist', function (req, res, next) {
  var page = req.query.page;
  var count = req.query.count;
  http.get('http://m.maizuo.com/v4/api/film/now-playing?page=' + page + '&count=' +count, function(response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })
})

router.get('/filmdetail', function (req, res, next) {
  var id = req.query.id;
  var time = new Date().getTime;
  http.get('http://m.maizuo.com/v4/api/film/' + id + '?__t=' + time, function(response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })
})

router.get('/cinema', function (req, res, next) {
  var time = new Date().getTime;
  http.get('http://m.maizuo.com/v4/api/cinema?__t=' + time, function(response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })
})

module.exports = router;