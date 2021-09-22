const express = require("express");

const router = express.Router();

const { controllerWrapper, validation } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const contactsController = require("../../controllers/contacts");

router.get("/", controllerWrapper(contactsController.getContacts));

router.get("/:contactId", controllerWrapper(contactsController.getContactById));

router.post(
  "/",
  validation(contactSchema),
  controllerWrapper(contactsController.addContact)
);

router.delete(
  "/:contactId",
  controllerWrapper(contactsController.removeContact)
);

router.put(
  "/:contactId",
  validation(contactSchema),
  controllerWrapper(contactsController.updateContact)
);

module.exports = router;
