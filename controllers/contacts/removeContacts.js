const { NotFound } = require("http-errors");

const { sendSuccessRes } = require("../../utils");
const contactsOperations = require("../../model/contacts");

const removeContact = async (req, res) => {
  const contact = await contactsOperations.removeContact(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

module.exports = removeContact;
