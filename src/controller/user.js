const repoUsers = require('../repo/user');
const sendResponse = require('../helper/response');
//Get
const get = async (req, res) => {
  try {
    const response = await repoUsers.getUsers();
    res.status(200).json({
      result: response.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server Error',
    });
  }
};
const create = async (req, res) => {
  try {
    const response = await repoUsers.createUsers(req.body);
    sendResponse.success(res, 200, {
      msg: 'create succes',
      data: response.rows,
    });
  } catch (err) {
    sendResponse.error(res, 500, 'Internal Server Error');
  }
};
const editPassword = async (req, res) => {
  try {
    const response = await repoUsers.editPassword(req.body);
    sendResponse.success(res, 200, {
      msg: (response.text = 'Password has been changed'),
      data: null,
    });
  } catch (obJerr) {
    const statusCode = obJerr.statusCode || 500;
    sendResponse.error(res, statusCode, { msg: obJerr.err.message });
  }
};

const UsersControler = {
  get,
  create,
  editPassword,
};

module.exports = UsersControler;
