import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FpwdService } from '../../services/fpwd.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm:FormGroup;

  constructor( 
    private fb:FormBuilder,
    private fpwd:FpwdService
  ) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ''
    });
  }

  forgot(){
    let emailId = this.forgotForm.get('email').value
    let data = { email:emailId};
    alert('password has been reset successfully');
    // this.fpwd.forgotPwd(data).subscribe( res=>{
      // alert('password has been reset successfully');
      
    // })
  }

}
