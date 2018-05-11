var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '47.93.62.147',
  user     : 'root',
  password : 'root',
  database : 'GuoHe'
});
 
connection.connect();
var query = 'SELECT topic_id, topic_content,FROM topics_tbl'
connection.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});