const User = require('../models/User');
const { successResponse, errorResponse, validationResponse, notFoundResponse } = require('../utils/apiResponse');

const index = async (req, res) => {
    let resoObj = await User.findAll({});
    return successResponse('The specified acction performed successfully', resoObj);
};

const register = async (req, res) => {
    try {
        let reqData = req.body;
        await User.create({
            First_Name: reqData.First_Name,
            Last_Name: reqData.Last_Name,
            User_Name: reqData.User_Name,
            Active: reqData.Active
        });
        result = successResponse('The specified acction performed successfully');
        return result;
    } catch (e) {
        return errorResponse(e);
    }
};

const show = async (req, res) => {
    let resoObj = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    return resoObj ? successResponse('The specified acction performed successfully', resoObj) : notFoundResponse('NOt Found');
};

const update = async (req, res) => {
    let reqData = req.body;
    const body = {
        First_Name: reqData.First_Name,
        Last_Name: reqData.Last_Name,
        User_Name: reqData.User_Name,
        Active: reqData.Active
    }
    await User.update(body, { where: { id: req.params.id } });
    return successResponse('The specified acction performed successfully');
};

const deleteRecod = async (req, res) => {
    User.destroy({ where: { id: req.params.id } });
    return successResponse('The specified acction performed successfully');
}

let userController = {};
userController.register = register;
userController.index = index;
userController.index = index;
userController.show = show;
userController.update = update;
userController.deleteRecod = deleteRecod;
module.exports = userController;