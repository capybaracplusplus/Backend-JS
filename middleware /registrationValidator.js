const validateUsername = (username) => {
    const errors = [];
    if (username.length < 3 || username.length > 20) {
        errors.push("Имя пользователя должно содержать от 3 до 20 символов.");
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        errors.push("Имя пользователя может содержать только буквы, цифры и символы подчеркивания.");
    }
    return errors;
};
const validateEmail = (email) => {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errors.push("Неверный формат email.");
    }

    return errors;
};
const validatePassword = (password) => {
    const errors = [];
    const minLength = 8;

    if (password.length < minLength) {
        errors.push(`Пароль должен быть не менее ${minLength} символов.`);
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну строчную букву.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну заглавную букву.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну цифру.");
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы один специальный символ.");
    }

    return errors;
};

const registrationValidator = (req, res, next) => {
    const { username, email, password } = req.body;

    const usernameErrors = validateUsername(username);
    const emailErrors = validateEmail(email);
    const passwordErrors = validatePassword(password);

    const errors = [...usernameErrors, ...emailErrors, ...passwordErrors];

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors,
        });
    }
    next();
};

module.exports = registrationValidator;