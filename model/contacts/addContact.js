const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const listContacts = require("./listContacts.js");

const contactsPath = path.join(__dirname, "contacts.json");

const addContact = async (body) => {
  const id = nanoid();
  const record = { id, ...body };
  const contacts = await listContacts();

  contacts.push(record);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return record;
};

module.exports = addContact;
