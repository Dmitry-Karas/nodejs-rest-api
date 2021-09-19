const { NotFound, BadRequest } = require("http-errors");

const contactsOperations = require("../model/contacts");
const { contactSchema } = require("../schemas");

const getContacts = async (req, res, next) => {
  const contacts = await contactsOperations.listContacts();

  return res.json({ status: "success", code: 200, data: { contacts } });
};

const getContactById = async (req, res, next) => {
  const contact = await contactsOperations.getContactById(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  return res.json({ status: "success", code: 200, data: { contact } });
};

const addContact = async (req, res, next) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    throw new BadRequest(error.message);
  }

  const contact = await contactsOperations.addContact(req.body);

  return res
    .status(201)
    .json({ status: "success", code: 201, data: { contact } });
};

const removeContact = async (req, res, next) => {
  const contact = await contactsOperations.removeContact(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  return res.json({ status: "success", code: 200, data: { contact } });
};

const updateContact = async (req, res, next) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    throw new BadRequest(error.message);
  }

  const contact = await contactsOperations.updateContact(
    req.params.contactId,
    req.body
  );

  if (!contact) {
    throw new NotFound();
  }

  return res.json({ status: "success", code: 200, data: { contact } });
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
