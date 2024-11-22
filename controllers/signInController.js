const loginService = require('../service/serviceAuth');

const signInController = async (req, res) => {
    try {
        console.log("Attempting to log in");
        const {email, password} = req.body;
        const {accessToken, refreshToken} = await loginService(email, password);
        // хранить accessToken и refreshToken в redis db
        // хранить секретный ключ для генерации токенов в докер энвайромент
        return res.status(200).json({
            "accessToken": accessToken, "refreshToken": refreshToken,
        });
    } catch (error) {
        console.error("Error in signInController:", error.message);
        return res.status(401).json({error: error.message});
    }
}
module.exports = signInController;
