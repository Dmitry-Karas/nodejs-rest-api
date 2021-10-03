const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const { _id } = req.user;
  const { favorite } = req.query;
  const contacts = await Contact.find(
    favorite ? { owner: _id, favorite } : { owner: _id }
  );

  sendSuccessRes(res, { contacts });
};

module.exports = getContacts;
