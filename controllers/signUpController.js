const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';
const pool = require('../dataBase');
const result = require("pg/lib/query");
const serviceRegistraion = require("../service/serviceRegistraion");
const ValidationError = require("../ValidationError");

const signUpController = async (req, res) => {
    console.log("log signUpController");
    try {
        const {username, email, password} = req.body;

        await serviceRegistraion(username, email, password);

        return res.status(200).json({
            "message": "success",
        });

    } catch (err) {
        console.error('Ошибка при регистрации пользователя:', err.message);
        if (err instanceof ValidationError) {
            return res.status(400).json({
                "message": "false",
                "error": err.message,
            });
        }
        return res.status(500).json({
            "message": "false",
            "error": "Ошибка сервера",
        });
    }
};
module.exports = signUpController;
