const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");
const { Conflict } = require("http-errors");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const { email, phone } = req.body;
  const includedContacts = await Contact.find({
    $or: [{ email }, { phone }],
  });

  includedContacts.forEach((contact) => {
    if (contact.owner.toString() === _id.toString()) {
      throw new Conflict("Contact already exist");
    }
  });

  const contact = await Contact.create({ ...req.body, owner: _id });

  sendSuccessRes(res, { contact }, 201);
};

module.exports = addContact;
