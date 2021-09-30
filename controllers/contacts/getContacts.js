const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();

  sendSuccessRes(res, { contacts });
};

module.exports = getContacts;
