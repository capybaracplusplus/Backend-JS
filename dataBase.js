const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres', host: 'localhost', database: 'postgres', password: 'postgres', port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Ошибка подключения к базе данных:', err.stack);
    }
    console.log('Успешное подключение к базе данных');
    release();
});

module.exports = pool;