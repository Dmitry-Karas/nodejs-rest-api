const { User } = require("../../models");
const { sendSuccessRes } = require("../../utils");

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: null });

  sendSuccessRes(res, null, 200);
  //   res.json({
  //     status: "success",
  //     code: 200,
  //     message: "Success logout",
  //   });
};

module.exports = logout;
