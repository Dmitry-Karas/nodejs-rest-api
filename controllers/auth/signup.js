const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const { nanoid } = require("nanoid");

const { User } = require("../../models");
const { sendSuccessRes, sendEmail } = require("../../utils");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Already register");
  }

  const verifyToken = nanoid();
  const newUser = new User({ email, verifyToken });
  const verifyEmail = {
    to: email,
    subject: "Verify your email to finish registration",
    html: `<a href="http://localhost:8080/api/auth/verify/${verifyToken}" target="_blank">Confirm email<a>`,
  };
  const avatar = gravatar.url(
    email,
    {
      s: "250",
      d: "robohash",
    },
    true
  );

  newUser.setPassword(password);
  newUser.setAvatar(avatar);

  await newUser.save();
  await sendEmail(verifyEmail);

  sendSuccessRes(res, null, 201);
};

module.exports = signup;
