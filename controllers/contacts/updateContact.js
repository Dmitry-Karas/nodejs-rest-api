const { NotFound } = require("http-errors");

const { sendSuccessRes } = require("../../utils");
const contactsOperations = require("../../model/contacts");

const updateContact = async (req, res) => {
  const contact = await contactsOperations.updateContact(
    req.params.contactId,
    req.body
  );

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

module.exports = updateContact;
