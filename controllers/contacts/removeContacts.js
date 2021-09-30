const { NotFound } = require("http-errors");

const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

module.exports = removeContact;
