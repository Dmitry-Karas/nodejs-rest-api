const { sendSuccessRes } = require("../../utils");
const contactsOperations = require("../../model/contacts");

const getContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();

  sendSuccessRes(res, { contacts });
};

module.exports = getContacts;
