const express = require("express");

const router = express.Router();

const { contactsController } = require("../../controllers");
const { controllerWrapper } = require("../../middlewares");

router.get("/", controllerWrapper(contactsController.getContacts));

router.get("/:contactId", controllerWrapper(contactsController.getContactById));

router.post("/", controllerWrapper(contactsController.addContact));

router.delete(
  "/:contactId",
  controllerWrapper(contactsController.removeContact)
);

router.put("/:contactId", controllerWrapper(contactsController.updateContact));

module.exports = router;
