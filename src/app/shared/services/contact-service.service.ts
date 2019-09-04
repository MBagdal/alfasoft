import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
    constructor(){}

    Create ( contact : Contact ) {

        var oldItems = this.GetAllContact();

        var newItem = [...oldItems, contact];

        localStorage.setItem('contacts', JSON.stringify(newItem) );
    }

    GetAllContact () {
        return JSON.parse(localStorage.getItem('contacts')) || [];
    }

    GetContactByName ( name : string ) {

        let data = this.GetAllContact();

        return data.filter(contact => contact.Name === name);

    }

    Update ( contact: Contact ) {

        const contactToEdit = this.GetContactByName(contact.Name);
        
        contactToEdit.Name    = contact.Name;
        contactToEdit.Email   = contact.Email;
        contactToEdit.Contact = contact.Contact;
        contactToEdit.Photo   = contact.Photo;
        
        this.Delete(contact.Name);

        this.Create(contactToEdit);


    }

    Delete ( name ) {

        const contact = this.GetContactByName(name);

        if (contact.length === 0) {
            alert();
        }

        const oldArraysContacts = this.GetAllContact();
        
        const newArrayContact = oldArraysContacts.filter(c => c.Name !== name);
        
        localStorage.setItem('contacts', JSON.stringify(newArrayContact));
    }
}
