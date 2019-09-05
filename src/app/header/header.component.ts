import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {

  userLogged : boolean = false;
  button : string = "Add contact"

  constructor(private service : LoginService, private router : Router) {
    
  }
  
  ngOnInit () {
    const user = JSON.parse(localStorage.getItem('login'));

    if (user.length > 0 || user !== null) {
      this.userLogged = true;
    }
  }
  
  Logout () {
    this.service.Logout();
    this.userLogged = false;
    this.router.navigate(['']);
  }

}
