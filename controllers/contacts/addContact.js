const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const contact = await Contact.create(req.body);

  sendSuccessRes(res, { contact }, 201);
};

module.exports = addContact;
