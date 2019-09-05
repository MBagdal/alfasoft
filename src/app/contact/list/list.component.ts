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
  userLogged : boolean = false;

  constructor(private service : ContactService) { 
    const userLogged = JSON.parse(localStorage.getItem('login'));

    if (userLogged !== null) {
      this.userLogged = true;
    }
  }

  ngOnInit() {
    const data = this.service.GetAllContact();
    this.contacts = data;
  }

  onDelete(id : number) {
    this.service.Delete(id);
    this.ngOnInit();
  }
}
