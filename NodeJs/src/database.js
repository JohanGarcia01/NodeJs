const myqsl = require('mysql');

const mysqlConnection = myqsl.createConnection({
    host: 'localhost',
    user: 'root',
	password: 'root',
	database: 'golang',
});

mysqlConnection.connect( function (err){
    if(err) {
        console.log(err);
        return;
    } else {
        console.log(' Db is connected ');
    }
})

module.exports = mysqlConnection;