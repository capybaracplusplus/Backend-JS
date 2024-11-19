const pool = require("../dataBase");

const repositoryCreateUser = async (username, email, hashedPassword) => {
    await pool.query('INSERT INTO users (username, hashpassword, email) VALUES ($1, $2, $3)', [username, hashedPassword, email]);
}

module.exports = repositoryCreateUser;