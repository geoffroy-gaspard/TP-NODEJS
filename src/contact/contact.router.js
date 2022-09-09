const { Router } = require('express');
const { ContactController } = require('./contact.controller.js');

const contactController = new ContactController();

const contactRouter = Router();

contactRouter.get("/", contactController.findAll);

contactRouter.get("/:id", contactController.findOne);

contactRouter.post("/", contactController.create);

contactRouter.delete("/:id", contactController.delete);

contactRouter.put("/:id", contactController.update);

module.exports.contactRouter = contactRouter;