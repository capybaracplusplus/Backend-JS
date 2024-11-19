const getUserByEmail = require("../repository/repositoryUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const SECRET_KEY = "your-secret-key";

const loginService = async (email, password) => {

    const user = await getUserByEmail(email);
    if (!user) {
        throw new Error("Invalid email or password.");
    }
    const isPasswordValid = await bcrypt.compare(password, user.hashpassword);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password.");
    }

    const accessToken = jwt.sign({id: user.id, username: user.username}, SECRET_KEY, {expiresIn: '1h'});
    const refreshToken = jwt.sign({id: user.id, username: user.username}, SECRET_KEY, {expiresIn: '10d'});
    return {accessToken, refreshToken};


}
module.exports = loginService;
