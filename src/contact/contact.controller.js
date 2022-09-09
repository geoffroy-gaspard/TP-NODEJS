const fs = require('fs');
const ContactService = require('./contact.service.js');
const contactData = fs.readFileSync('./contacts.json');
contacts = JSON.parse(contactData);

class ContactController {
    constructor() {
        this.contactService = new ContactService();
    }
    findAll = async (_, response) => {};
}

module.exports.ContactController = ContactController;