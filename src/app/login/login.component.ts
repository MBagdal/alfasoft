import { Component, OnInit, Input, Inject } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service : LoginService, 
    private toast : ToastrService,
    private router : Router,
  ) {}

  ngOnInit() {
    if (this.HasLogged()) {
      this.router.navigate(['/contact/list']);  
    }
  }

  Login (form: NgForm) {

    const { email, password } = form.value;
    
    const user : User = {
      Id: Math.random(),
      Email: null,
      Password: null,
    };

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.toast.error('Not is an valid email');  
    }

    user.Email = email;
    user.Password = password;

    if (!this.service.Login(user) ) {
      this.toast.error('Invalid Login');
      return;
    };

    this.toast.success('Logged');

    this.router.navigate(['/contact/list']);
  }

  private HasLogged () {
    const userLogged = JSON.parse(localStorage.getItem('login'));
    
    return userLogged.length !== null;
  }

}
