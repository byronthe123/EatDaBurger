const connection = require('./connection');

const orm = {
    selectAll: (table, callback) => {
        const queryString = `SELECT * FROM ??`;
        connection.query(queryString, [table], (err, data) => {
            return callback(err, data);
        });
    },
    insertOne: (table, burgerName, callback) => {
        const queryString = `INSERT INTO ??(burger_name) VALUES(?)`;
        connection.query(queryString, [table, burgerName], (err, success) => {
            return callback(err, success);
        });
    },
    updateOne: (table, colToUpdate, updatedVal, updateTargetCol, updateTargetVal, callback) => {
        const queryString = 'UPDATE ?? SET ?? = ? WHERE ??.?? = ?';
        connection.query(queryString, [table, colToUpdate, updatedVal, table, updateTargetCol, updateTargetVal], (err, success) => {
            return callback(err, success);
        });
    }
}

module.exports = orm;