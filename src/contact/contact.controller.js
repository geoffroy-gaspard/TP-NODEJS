const fs = require('fs');
const { generateRandomIndex } = require('../utils/generate-id.js');
const ContactService = require('./contact.service.js');


class ContactController {
    constructor() {
        this.contactService = new ContactService();
    }

    findAll = async (_, response) => {
        const contacts = await this.contactService.findAll();
        return response.send(contacts);
    };

    findOne = async (request, response) => {
        try {
            const id = parseInt(request.params.id);
            const contact = await this.contactService.findOne(id);
            response.send(contact);
        } catch (err) {
            response.status(404).send(err.message);
        }
    };

    delete = async (request, response) => {
        try {
            const id = parseInt(request.params.id);
            await this.contactService.deleteOne(id);
            response.send("Contact deleted successfuly");
        } catch (err) {
            response.status(404).send(err.message);
        }
    };

    create = async (request, response) => {
        try {
            const id = generateRandomIndex();
            request.body.id = id;
            const newContact = request.body;
            await this.contactService.createOne(newContact);
            response.status(201).send("Contact added successfuly");
        } catch (err) {
            response.sendStatus(500);
        }
    };

    update = async (request, response) => {
        try {
            const id = parseInt(request.params.id);
            request.body.id = id;
            await this.contactService.updateOne(id, request.body);
            response.send("Contact updated successfuly");
        } catch (err) {
            response.status(404).send(err.message);
        }
    };
}

module.exports.ContactController = ContactController;