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

router.post("/login",(req,res,next)=>{
   const username = req.body.username;
   const password = req.body.password;
   
   var query = "SELECT * FROM `login` WHERE name = '"+username+"'  AND password = '"+password+"'"
   db.connetion.query(query,(err,result,fields)=>{
     if (err) {
       res.redirect("/")
     }else{
        console.log(result[0])
        if (result[0] != undefined) {
          res.redirect("/search")
        }
        else{
          res.redirect("/")
        }
     }
     
   })
   console.log(query)
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
