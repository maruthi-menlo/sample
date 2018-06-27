import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword.component'
import { FpwdService } from '../../services/fpwd.service';  
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotpasswordComponent],
  providers:[FpwdService]
})
export class ForgotpasswordModule { }
