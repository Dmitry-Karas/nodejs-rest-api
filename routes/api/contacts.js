const express = require("express");

const router = express.Router();

const { controllerWrapper, validation } = require("../../middlewares");
const {
  joiContactSchema,
  joiUpdateFavoriteSchema,
} = require("../../models/contact");
const contactsController = require("../../controllers/contacts");

router.get("/", controllerWrapper(contactsController.getContacts));
router.get("/:contactId", controllerWrapper(contactsController.getContactById));
router.post(
  "/",
  validation(joiContactSchema),
  controllerWrapper(contactsController.addContact)
);
router.delete(
  "/:contactId",
  controllerWrapper(contactsController.removeContact)
);
router.put(
  "/:contactId",
  validation(joiContactSchema),
  controllerWrapper(contactsController.updateContact)
);
router.patch(
  "/:contactId/favorite",
  validation(joiUpdateFavoriteSchema),
  controllerWrapper(contactsController.updateFavorite)
);

module.exports = router;
