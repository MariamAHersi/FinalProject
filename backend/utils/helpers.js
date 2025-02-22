const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Password hashing
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// Password checking
const checkPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Generate JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, 'your_jwt_secret', { expiresIn: '24h' });
};

module.exports = {
    hashPassword,
    checkPassword,
    generateToken
};