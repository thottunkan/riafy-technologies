var express = require('express');
var router = express.Router();
var searchHelper = require("../helpers/searchHelper")
const db = require("../config/connection")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get("/search",(req,res,next)=>{
  res.sendFile("search.html",{root:"./views"})
})
router.post("/searchItem",(req,res,next)=>{
  
 // res.send(searchHelper.searchItem())
  var keyword = req.body.search;
  // var result = searchHelper.searchItem(keyword)
  // console.log("search result = "+result.toString())
  // res.json(searchHelper.result)
  var query = "SELECT * FROM `nse_stock_info` WHERE name LIKE "+"'"+keyword+"%'";
    
  db.connetion.query(query,(err,result,fields)=>{
      
      res.json(result)
  })
 


})

module.exports = router;
