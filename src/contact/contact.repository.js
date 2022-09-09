const fs = require('fs/promises');

class ContactRepository {

    async findAll() {
        const contacts = await fs.readFile('./contacts.json', 'utf-8');
        return JSON.parse(contacts)
    };

    async findOne(id) {
        const contacts = await this.findAll();
        return contacts[id];
    };

    async createOne(contactObj) {
        const contacts = await this.findAll();
        const data = JSON.stringify(Object.assign(contacts, contactObj));
        await fs.writeFile('./contacts.json', data);
    };

    async updateOne(id, contactObj) {
        const contacts = await this.findAll();
        delete contacts[id];
        const data = JSON.stringify(Object.assign(contacts, contactObj));
        await fs.writeFile('./contacts.json', data);
    };

    async deleteOne(id) {
        const contacts = await this.findAll();
        delete contacts[id];
        await fs.writeFile('./contacts.json', JSON.stringify(contacts));
    };
}

module.exports = ContactRepository;