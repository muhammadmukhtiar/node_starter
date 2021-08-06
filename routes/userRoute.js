var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const validator_middleware = require('../middleware/validator_middleware');
const { addValidation } = require('../validations/UserValidations');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  res.send(await userController.index(req, res));
});

/* GET user by id . */
router.get('/:id', async (req, res, next) => {
  res.send(await userController.show(req, res));
});

/* GET update user by id . */
router.put('/:id', async (req, res, next) => {
  res.send(await userController.update(req, res));
});

/* GET delet user by id . */
router.delete('/:id', async (req, res, next) => {
  res.send(await userController.deleteRecod(req, res));
});


/* GET user register by id . */
router.post('/register', validator_middleware(addValidation), async (req, res, next) => {
  res.send(await userController.register(req, res));
});

module.exports = router;
