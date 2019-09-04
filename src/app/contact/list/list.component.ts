import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact-service.service';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  contacts : Contact[] = []; 

  constructor(private service : ContactService) { }

  ngOnInit() {
    const data = this.service.GetAllContact();
    
    this.contacts = data;
  }

  onDelete(name : string) {
    if (confirm('Are you sure to delete this contact?')) {
      this.service.Delete(name);
      this.ngOnInit();
    }
  }
}
