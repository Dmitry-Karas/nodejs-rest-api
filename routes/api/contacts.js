const express = require("express");

const router = express.Router();

const { controllerWrapper, validation } = require("../../middlewares");
const {
  JoiContactSchema,
  JoiUpdateFavoriteSchema,
} = require("../../models/contact");
const contactsController = require("../../controllers/contacts");

router.get("/", controllerWrapper(contactsController.getContacts));

router.get("/:contactId", controllerWrapper(contactsController.getContactById));

router.post(
  "/",
  validation(JoiContactSchema),
  controllerWrapper(contactsController.addContact)
);

router.delete(
  "/:contactId",
  controllerWrapper(contactsController.removeContact)
);

router.put(
  "/:contactId",
  validation(JoiContactSchema),
  controllerWrapper(contactsController.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(JoiUpdateFavoriteSchema),
  controllerWrapper(contactsController.updateFavorite)
);

module.exports = router;
