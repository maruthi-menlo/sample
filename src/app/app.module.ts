import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AppRoutingModule } from './/app-routing.module';
import { ForgotpasswordModule } from './components/forgotpassword/forgotpassword.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { LoginModule } from './components/login/login.module';
@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForgotpasswordModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
