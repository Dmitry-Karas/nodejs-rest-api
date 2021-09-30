const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const removeContact = require("./removeContacts");
const updateContact = require("./updateContact");
const updateFavorite = require("./updataFavorite");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
};
