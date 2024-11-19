const pool = require("../dataBase");

const repositoryCheckUser = async (username) => {
    try {
        const result = await pool.query("SELECT id FROM users WHERE username = $1", [username]);
        return result.rows.length > 0;
    } catch (error) {
        console.error("Ошибка при проверке имени пользователя в базе данных:", error);
        throw error;
    }
}
module.exports = repositoryCheckUser;