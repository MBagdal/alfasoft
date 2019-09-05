import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact-service.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  contact : Contact;

  constructor(private service : ContactService, private route : ActivatedRoute) { 

    const id = this.route.snapshot.paramMap.get('id');
    
    const data = this.service.GetContactById(+id);

    this.contact = data[0];

  }

  ngOnInit () {

  }

}
