const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "dmitrythekaras@gmail.com" };

  await sgMail.send(email);
};

module.exports = sendEmail;
