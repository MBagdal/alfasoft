import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './contact/add/add.component';
import { DeleteComponent } from './contact/delete/delete.component';
import { DetailsComponent } from './contact/details/details.component';
import { ListComponent } from './contact/list/list.component';
import { LoginComponent } from './login/login.component';
import { ContactService } from './shared/services/contact-service.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    DetailsComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: AppComponent },
      { path: 'contact/add', component: AddComponent },
      { path: 'contact/list', component: ListComponent },
      { path: 'contact/delete', component: DeleteComponent },
      { path: 'contact/delete/:id', component: DeleteComponent },
      { path: 'contact/details', component: DetailsComponent }
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
