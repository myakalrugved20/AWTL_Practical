

const mysql = require('mysql2');
// connection configurations
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Avenger@2000',
    database: 'awtldata'
});

// connect to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});

// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   connection.query(sql, function (err,result)  {
//     if (err) throw err;
//     console.log("Table created");
  // });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Valley 345')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sqlr = "SELECT * from awtldata.customers";
  connection.query(sqlr, function (err,result)  {
    if (err) throw err;
    console.log(result);
  });

  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

  var sql = "DELETE FROM customers WHERE address = 'Highway 37'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });


connection.end();