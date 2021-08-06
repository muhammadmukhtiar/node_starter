const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
let User = {
    addValidation: Joi.object().keys({
        First_Name: Joi.string().required(),
        Last_Name: Joi.string().required(),
        Email: Joi.string().optional(),
        User_Name: Joi.any().optional(),
        Phone_Number: Joi.any().optional(),
    }).unknown(true),

    updateValidation: Joi.object().keys({
        First_Name: Joi.string().required(),
        Last_Name: Joi.string().required(),
        Email: Joi.string().optional(),
        User_Name: Joi.any().optional(),
        Phone_Number: Joi.any().optional(),
    }).unknown(true),
};

module.exports = User;