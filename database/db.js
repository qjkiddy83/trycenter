let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017/qj';
let Promise = require('bluebird');

let connect = function() {
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

let _insert = function(db, table, data) {
    return new Promise(function(resolve, reject) {
        var collection = db.collection(table);
        //插入数据
        collection.insert(data, function(err, result) {
            if (err) {
                console.log('Error:' + err);
                reject(err)
                return;
            }
            resolve(result);
            db.close();
        });
    })
}

let _delete = function(db, table, data) {
    return new Promise(function(resolve, reject) {
        var collection = db.collection(table);
        //插入数据
        collection.deleteMany(data, function(err, result) {
            if (err) {
                console.log('Error:' + err);
                reject(err)
                return;
            }
            resolve(result);
            db.close();
        });
    })
}

let _update = function(db, table, data, set, multi) {
    return new Promise(function(resolve, reject) {
        var collection = db.collection(table);
        //插入数据
        collection.update(data, { $set: set }, { multi: multi },

            function(err, result) {
                if (err) {
                    console.log('Error:' + err);
                    reject(err)
                    return;
                }
                resolve(result);
                db.close();
            });
    })
}

let _find = function(db, table, condition) {
    return new Promise(function(resolve, reject) {
        var collection = db.collection(table);
        //插入数据
        collection.find(condition).toArray(function(err, result) {
            if (err) {
                console.log('Error:' + err);
                reject(err)
                return;
            }
            resolve(result);
            db.close();
        });
    })
}

exports.insert = function(table, data) {
    return new Promise(function(resolve, reject) {
        connect().then(function(db) {
            return _insert(db, table, data)
        }).then(function(result) {
            resolve(result)
        }).catch(function(err) {
            reject(err)
        })
    });
}

exports.delete = function(table, data) {
    return new Promise(function(resolve, reject) {
        connect().then(function(db) {
            return _delete(db, table, data)
        }).then(function(result) {
            resolve(result)
        }).catch(function(err) {
            reject(err)
        })
    });
}

exports.update = function(table, data, set, multi) {
    return new Promise(function(resolve, reject) {
        connect().then(function(db) {
            return _update(db, table, data, set, multi)
        }).then(function(result) {
            resolve(result)
        }).catch(function(err) {
            reject(err)
        })
    });
}

exports.find = function(table, condition) {
    return new Promise(function(resolve, reject) {
        connect().then(function(db) {
            return _find(db, table,condition)
        }).then(function(result) {
            resolve(result)
        }).catch(function(err) {
            reject(err)
        })
    });
}