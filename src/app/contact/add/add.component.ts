import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Contact } from 'src/app/shared/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact-service.service';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'url';

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

  constructor(private service : ContactService, private toast : ToastrService, private route : ActivatedRoute) { }

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

    const id = this.route.snapshot.paramMap.get('id');
    
    if(id !== null) {
      this.person.Name = name;
      this.person.Email = email;
      this.person.Contact = contact;
    
      if ( this.service.Update( this.person ) ) {
        this.toast.success("Contact successfully updated");
      }
      
      return;
    } 

    this.person.Name = name;
    this.person.Email = email;
    this.person.Contact = contact;
    
    if ( this.service.Create( this.person ) ) {
      this.toast.success("Contact successfully registered");
    }
  }
}
