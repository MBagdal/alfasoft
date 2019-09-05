import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ContactService {
    constructor(private toast : ToastrService){}

    Create ( contact : Contact ) : boolean{
        if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contact.Email) ) {
            this.toast.error('Not is an valid email'); 
            return;
        }
      
        if ( !/^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4,5}[-\s\.]?[0-9]{4}$/.test(contact.Contact) ) {
            this.toast.error('The contact is invalid');
            return false; 
        }
          
        if (this.checkContactAlreadySaved( contact.Email, contact.Contact ) ) {
            this.toast.error('email or contact already saved');
            return false;
        } 

        var oldItems = this.GetAllContact();

        var newItem = [...oldItems, contact];

        localStorage.setItem('contacts', JSON.stringify(newItem) );
        
        return true;
    }

    GetAllContact () {
        return JSON.parse(localStorage.getItem('contacts')) || [];
    }

    GetContactById ( id : number ) {

        let data = this.GetAllContact();

        return data.filter(contact => contact.Id === id);

    }

    Update ( contact: Contact ) : boolean{

        const contactToEdit = this.GetContactById(contact.Id);
        
        contactToEdit.Name    = contact.Name;
        contactToEdit.Email   = contact.Email;
        contactToEdit.Contact = contact.Contact;
        contactToEdit.Photo   = contact.Photo;
        
        this.Delete(contact.Id);

        return this.Create(contactToEdit);
    }

    Delete ( id: number ) {

        const oldArraysContacts = this.GetAllContact();
        
        const newArrayContact = oldArraysContacts.filter(c => c.Id !== id);
        
        localStorage.setItem('contacts', JSON.stringify(newArrayContact));
    }

    private checkContactAlreadySaved ( email: string, contact : string ) : boolean {

        const allContact = this.GetAllContact();
        
        return allContact.filter(c => c.Email === email || c.Contact === contact).length > 0;
        
      } 
}
