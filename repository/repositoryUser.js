const pool = require("../dataBase");

const getUserByEmail = async (email) => {
    const result = await pool.query('SELECT id, username, hashpassword FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

module.exports = getUserByEmail;

