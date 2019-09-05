import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged : boolean = false;

  constructor(private service : LoginService, private router : Router) {}
  
  ngOnInit () {
    const user = JSON.parse(localStorage.getItem('login'));

    if (user.length > 0 || user !== null) {
      this.userLogged = true;
    }
  }


  Logout () {
    this.service.Logout();
    this.router.navigate(['/'])
  }

}
