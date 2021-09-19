const listContacts = require("./listContacts.js");

const getContactById = async (contactId) => {
  const contacts = await listContacts();

  return contacts.find((contact) => contact.id === contactId);
};

module.exports = getContactById;
