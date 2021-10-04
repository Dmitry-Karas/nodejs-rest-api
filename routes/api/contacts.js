const express = require("express");

const router = express.Router();

const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const {
  joiContactSchema,
  joiUpdateFavoriteSchema,
} = require("../../models/contact");
const contactsController = require("../../controllers/contacts");

router.get(
  "/",
  authenticate,
  controllerWrapper(contactsController.getContacts)
);
router.get(
  "/:contactId",
  authenticate,
  controllerWrapper(contactsController.getContactById)
);
router.post(
  "/",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(contactsController.addContact)
);
router.delete(
  "/:contactId",
  authenticate,
  controllerWrapper(contactsController.removeContact)
);
router.put(
  "/:contactId",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(contactsController.updateContact)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(joiUpdateFavoriteSchema),
  controllerWrapper(contactsController.updateFavorite)
);

module.exports = router;
