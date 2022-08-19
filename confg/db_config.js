const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'node_mysql'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Database connected');
});


module.exports = db;