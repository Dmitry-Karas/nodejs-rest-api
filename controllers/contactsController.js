const { NotFound } = require("http-errors");

const contactsOperations = require("../model/contacts");

const { sendSuccessRes } = require("../utils");

const getContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();

  sendSuccessRes(res, { contacts });
};

const getContactById = async (req, res) => {
  const contact = await contactsOperations.getContactById(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

const addContact = async (req, res) => {
  const contact = await contactsOperations.addContact(req.body);

  sendSuccessRes(res, { contact }, 201);
};

const removeContact = async (req, res) => {
  const contact = await contactsOperations.removeContact(req.params.contactId);

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

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

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
