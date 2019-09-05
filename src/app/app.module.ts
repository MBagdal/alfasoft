import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './contact/add/add.component';
import { DetailsComponent } from './contact/details/details.component';
import { ListComponent } from './contact/list/list.component';
import { LoginComponent } from './login/login.component';
import { ContactService } from './shared/services/contact-service.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DetailsComponent,
    ListComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'contact/add', component: AddComponent },
      { path: 'contact/edit/:id', component: AddComponent },
      { path: 'contact/list', component: ListComponent },
      { path: 'contact/details/:id', component: DetailsComponent }
    ])
  ],
  providers: [ContactService, LoginService],
  bootstrap: [AppComponent]
})

export class AppModule {}
