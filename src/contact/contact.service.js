const ContactRepository = require('./contact.repository.js');

class ContactService {
    constructor() {
        this.contactRepository = new ContactRepository();
    }

    findAll() {};
}

module.exports = ContactService;