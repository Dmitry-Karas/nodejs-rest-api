const { BadRequest, NotFound } = require("http-errors");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { sendSuccessRes } = require("../../utils");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, "_id email password verify");

  if (!user) {
    throw new NotFound(`User not found`);
  }

  if (!user.comparePassword(password)) {
    throw new BadRequest("Invalid email or password");
  }

  if (!user.verify) {
    throw new BadRequest("User is not verified");
  }
  const { _id } = user;
  const payload = {
    _id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

  await User.findByIdAndUpdate(_id, { token });

  sendSuccessRes(res, { data: { token } }, 201);
};

module.exports = login;
