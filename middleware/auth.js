// const jwt = require('jsonwebtoken');
const constants = require('../utils/constants');
module.exports = (req, res, next) => {

    try {

        const token = req.headers.authorization.split(' ')[1];
        let authToken = constants.AUTH_TOKEN;
        if (authToken == token) {
            next();
        } else {
            res.status(401).json({
                status: false,
                message: 'Invalid token',
                data:{}
            });
        }


    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};