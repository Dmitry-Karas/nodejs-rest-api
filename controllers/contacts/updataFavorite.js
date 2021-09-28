const { NotFound } = require("http-errors");

const { sendSuccessRes } = require("../../utils");
const { Contact } = require("../../models");

const updateFavorite = async (req, res) => {
  //   const { favorite } = await Contact.findById(req.params.contactId);

  const contact = await Contact.findByIdAndUpdate(
    req.params.contactId,
    { favorite: req.body.favorite },
    // { favorite: !favorite },
    { new: true }
  );

  if (!contact) {
    throw new NotFound();
  }

  sendSuccessRes(res, { contact });
};

module.exports = updateFavorite;
