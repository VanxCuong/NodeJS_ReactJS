var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '123456',
  port: 5432,
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render("add",{})
});
router.post('/add', function(req, res, next) {
  var {name,price,images}=req.body;
  console.log(name+price+images);
  pool.query("insert into product(name,price,images) values($1,$2,$3)",[name,Number(price),images],(err,result)=>{
    if(err) return res.send(err);
    return res.send("Insert Thành Công");
  })
  
});
router.get('/getData01', function(req, res, next) {
  // // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  pool.query('select * from product',(err,result)=>{
    if(err) return new Error("Lỗi rùi:"+err);
    res.send(result.rows);
    console.log('hihi');
    
    // pool.end();
  })
});

module.exports = router;
