const db = require("../config/connection")



module.exports.searchItem = (name)=>{
    var query = "SELECT * FROM `nse_stock_info` WHERE name LIKE "+"'"+name+"%'";
    
    var data =[];
    db.connetion.query(query,(err,result,fields)=>{
        
        data.push(result)
        module.exports.searchresult = result
       
    })
    console.log(data)
    
    
}