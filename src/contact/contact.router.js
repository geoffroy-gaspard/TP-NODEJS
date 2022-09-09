const { Router } = require('express');
const { ContactController } = require('./contact.controller.js');

const contactController = new ContactController();

const contactRouter = Router();

contactRouter.get("/", contactController.findAll);

module.exports.contactRouter = contactRouter;