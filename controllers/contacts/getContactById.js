const { NotFound } = require("http-errors");

const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

module.exports = getContactById;
