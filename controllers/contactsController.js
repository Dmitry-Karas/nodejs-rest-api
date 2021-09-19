const contactsOperations = require("../model/contacts");
const { contactSchema } = require("../schemas");

const getContacts = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();

    return res.json({ status: "success", code: 200, data: { contacts } });
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contact = await contactsOperations.getContactById(
      req.params.contactId
    );

    if (!contact) {
      const err = new Error("Not found");

      err.status = "error";
      err.code = 404;

      throw err;
    }

    return res.json({ status: "success", code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);

    if (error) {
      const err = new Error(error.message);

      err.status = "error";
      err.code = 400;

      throw err;
    }

    const contact = await contactsOperations.addContact(req.body);

    return res
      .status(201)
      .json({ status: "success", code: 201, data: { contact } });
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const contact = await contactsOperations.removeContact(
      req.params.contactId
    );

    if (!contact) {
      const err = new Error("Not found");

      err.status = "error";
      err.code = 404;

      throw err;
    }

    return res.json({ status: "success", code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);

    if (error) {
      const err = new Error(error.message);

      err.status = "error";
      err.code = 400;

      throw err;
    }

    const contact = await contactsOperations.updateContact(
      req.params.contactId,
      req.body
    );

    if (!contact) {
      const err = new Error("Not found");

      err.status = "error";
      err.code = 404;

      throw err;
    }

    return res.json({ status: "success", code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
