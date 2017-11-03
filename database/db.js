var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/qj';
var Promise = require('bluebird');

exports.connect = function() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function(err, db) {
            if (err) {
                console.error(err)
                reject(err)
                return;
            }
            console.log("连接成功！");
            resolve(db);
        });
    })
}

exports.insert = function(db, table, data) {
    return new Promise(function(resolve, reject) {
        var collection = db.collection(table);
        //插入数据
        collection.insert(data, function(err, result) {
            if (err) {
                console.log('Error:' + err);
                reject(err)
                return;
            }
            // console.log(result);
            resolve(result);
            db.close();
        });
    })
}