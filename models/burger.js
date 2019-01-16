const orm = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll('burgers', (err, data) => {
            callback(err, data);
        })
    },
    insertOne: (burgerName, callback) => {
        orm.insertOne('burgers', burgerName, (err, success) => {
            return callback(err, success);
        })
    },
    updateOne: (colToUpdate, updatedVal, updateTargetCol, updateTargetVal, callback) => {
        orm.updateOne('burgers', colToUpdate, updatedVal, updateTargetCol, updateTargetVal, (err, success) => {
            return callback(err, success);
        })
    }
}

module.exports = burger;