const { Router } = require('express');
const { ContactController } = require('./contact.controller.js');
const { validateBody } = require('./middlewares/validate.body');

const contactController = new ContactController();

const contactRouter = Router();

contactRouter.get("/", contactController.findAll);

contactRouter.get("/:id", contactController.findOne);

contactRouter.post("/", validateBody, contactController.create);

contactRouter.delete("/:id", contactController.delete);

contactRouter.put("/:id", validateBody, contactController.update);

// contactRouter.patch("/:id", contactController.modify);

module.exports.contactRouter = contactRouter;