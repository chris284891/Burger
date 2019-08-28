var connection = require("../config/connection.js");


var orm = {
  selectAll: function(tableInput, cb) {
      var queryString = `SELECT * FROM ${tableInput};`

      connection.query(queryString, function(err, result){
          if (err) {throw err}
          cb(result);
      })
  },
  insertOne: function(tableName, columnName, columnValue, cb){
      var queryString = `INSERT INTO ${tableName} (${columnName}) VALUES (?);`

      connection.query(queryString, columnValue, function(err, result){
          if (err) {throw err};
          cb(result);
      })
  },
  updateOne: function(tableName, changeCol, changeVal, condition, cb){
      var queryString = `UPDATE ${tableName} SET ${changeCol} = ${changeVal} WHERE ${condition}`
      connection.query(queryString, function(err, result){
          if (err) {throw err}
          cb(result);
      })
  }
}


module.exports = orm;