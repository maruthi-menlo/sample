import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'login', component:LoginComponent },
  { path: '', pathMatch:'full', redirectTo:"/login" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
