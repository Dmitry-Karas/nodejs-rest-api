const { NotFound } = require("http-errors");

const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true }
  );

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

module.exports = updateContact;
