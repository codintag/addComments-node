let mysql      = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tuto'
});
 
connection.connect();

module.exports = connection;
