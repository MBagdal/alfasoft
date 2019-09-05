import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {
    constructor(){}

    Login ( user : User ) {

        const allUsers = [
            {Email: "marco@gmail.com", Password: "12345"},
            {Email: "marcio@gmail.com", Password: "123"},
        ]

        console.log(allUsers)

        const userLogged = allUsers.filter(u => u.Email === user.Email && u.Password === user.Password);

        localStorage.setItem('login', JSON.stringify(userLogged));

        return userLogged.length > 0;
    }

    Logout () {
        localStorage.removeItem('login');
    }
}
