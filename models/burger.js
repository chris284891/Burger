var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(columnName, columnValue, cb){
        orm.insertOne("burgers", columnName, columnValue, function(res){
            cb(res);
        })
    }, 
    updateOne: function(changeCol, changeVal, condition, cb){
        orm.updateOne("burgers", changeCol, changeVal, condition, function(res){
            cb(res);
        })
    }    
}


  module.exports = burger;