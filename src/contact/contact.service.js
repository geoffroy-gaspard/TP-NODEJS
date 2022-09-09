const ContactRepository = require('./contact.repository.js');

class ContactService {
    constructor() {
        this.contactRepository = new ContactRepository();
    }

    findAll() {
        return this.contactRepository.findAll();
    };

    async findOne(id) {
        const contact = await this.contactRepository.findOne(id);
        if(!contact) throw new Error(`Cannot find contact with id ${id}`);
        return contact;
    };

    async createOne(contactObj) {
        const createObj = {};
        createObj[contactObj.id] = contactObj;
        return this.contactRepository.createOne(createObj);
    };

    async deleteOne(id) {
        const contact = await this.contactRepository.findOne(id);
        if(!contact) throw new Error(`Cannot find contact with${id}`);
        return this.contactRepository.deleteOne(id);
    };

    async updateOne(id, contactObj) {
        const contact = await this.contactRepository.findOne(id);
        if(!contact) throw new Error(`Cannot find contact with${id}`)
        const createObj = {};
        createObj[id] = contactObj;
        return this.contactRepository.updateOne(id, createObj);
    };

    // async modifyOne(id, contactObj) {
    //     const contact = await this.contactRepository.findOne(id);
    //     if(!contact) throw new Error(`Cannot find contact with${id}`)
    //     const createObj = {};
    //     createObj[id] = contactObj;
    //     return this.contactRepository.modifyOne(id, createObj);
    // };
}

module.exports = ContactService;