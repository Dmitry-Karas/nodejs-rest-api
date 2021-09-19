const fs = require("fs/promises");
const path = require("path");

const listContacts = require("./listContacts.js");

const contactsPath = path.join(__dirname, "contacts.json");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) return;

  const newContacts = contacts.filter((contact) => contact.id !== contactId);

  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));

  return contact;
};

module.exports = removeContact;
