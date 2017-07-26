var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/maizuo";

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.query.name;
  var password = req.query.password;
  MongoClient.connect(DB_CONN_STR, function(err, db){
    if(err){
      res.send({
          code: -1,
          msg:'Database can not collection'
      });
    }else{
      var conn = db.collection('user');
      conn.find({"name":name}).count(function(err, info){
        if(!info){
          conn.save({"name":name,"password":password},function(){
            res.send({
                code:1,
                msg:'注册并登录成功'
            });
          })
        }else{
          conn.find({"name":name,"password":password}).count(function(err,info){
            if(!info){
              res.send({
                  code:-2,
                  msg:'用户名或密码错误'
              });
            }else{
              res.send({
                  code:0,
                  msg:'登录成功'
              });
            }
          })
          db.close();
        }
      })
    }
    
  })
});

module.exports = router;
