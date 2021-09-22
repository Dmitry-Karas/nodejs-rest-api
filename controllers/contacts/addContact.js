const { sendSuccessRes } = require("../../utils");
const contactsOperations = require("../../model/contacts");

const addContact = async (req, res) => {
  const contact = await contactsOperations.addContact(req.body);

  sendSuccessRes(res, { contact }, 201);
};

module.exports = addContact;
