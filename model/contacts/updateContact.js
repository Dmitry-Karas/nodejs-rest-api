const fs = require("fs/promises");
const path = require("path");

const listContacts = require("./listContacts");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) return;

  Object.assign(contact, body);

  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contact;
};

module.exports = updateContact;
