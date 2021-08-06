const { validationResponse } = require('../utils/apiResponse');

const validator_middleware = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const validationresponse = validationResponse(error.message);
      res.status(400).send(validationresponse);
    }
  }
}

module.exports = validator_middleware