import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Contact } from 'src/app/shared/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  person: Contact = {
    Id: Math.random(),
    Name: null,
    Contact: null,
    Email: null,
    Photo: null
  };

  constructor(private service : ContactService, private toast : ToastrService) { }

  ngOnInit() {
  }

  onReset(form?: NgForm) {
    if (form != null)
      form.resetForm();
  }

  onSubmit(form: NgForm) {
    const {
      name, 
      contact,
      email,
      photo
    } = form.value;

    console.log(this.checkContactAlreadySaved( email ));
    
    if ( this.checkContactAlreadySaved( email ) ) {
      this.toast.error('Contact already saved');
      return;
    } 

    this.person.Name = name;
    this.person.Email = email;
    this.person.Contact = contact;
    
    this.service.Create( this.person );

    this.toast.success("Contact successfully registered");

  }

  private checkContactAlreadySaved ( email: string ) : boolean {
    
    const allContact = this.service.GetAllContact();
    
    return allContact.filter(contact => contact.Email === email).length > 0;
    
  }

}
