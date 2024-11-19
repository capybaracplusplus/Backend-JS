const pool = require("../dataBase");

const repositoryCheckEmail = async (email) => {
    try {
        const result = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
        return result.rows.length > 0;
    } catch (error) {
        console.error("Ошибка при проверке email в базе данных:", error);
        throw error;
    }
}
module.exports = repositoryCheckEmail;