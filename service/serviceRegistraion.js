const repositoryCreateUser = require("../repository/repositoryCreateUser");
const repositoryCheckUser = require("../repository/repositoryCheckUser");
const repositoryCheckEmail = require("../repository/repositoryCheckEmail");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const ValidationError = require("../ValidationError");

const serviceRegistraion = async (username, email, password) => {
    const userExists = await repositoryCheckUser(username);
    if (userExists) {
        throw new ValidationError("Пользователь с таким именем уже существует.");
    }
    const emailExists = await repositoryCheckEmail(email);
    if (emailExists) {
        throw new ValidationError("Пользователь с таким email уже существует.");
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    repositoryCreateUser(username, email, hashedPassword);
}
module.exports = serviceRegistraion;
