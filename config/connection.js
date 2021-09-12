const mysql = require('mysql')

// create the connection to database

var conn = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5436528',
    password:"62xN6d94L7",
    database: 'sql5436528'
})

module.exports.makeConnection = ()=>{
       
    conn.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + conn.threadId);
      });
    //return conn.connect();
}
module.exports.connetion =conn