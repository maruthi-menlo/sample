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
  showResetPassword:boolean = false;
  showConfirmPassword:boolean = false; 
  constructor( 
    private fb:FormBuilder,
    private fpwd:FpwdService
  ) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: '',
      password:'',
      confirmPassword:''
    });
  }

  forgot(){
    let emailId = this.forgotForm.get('email').value
    let data = { email:emailId};
    console.log(data);
    this.showResetPassword = true;
    //alert('password has been reset successfully');
    // this.fpwd.forgotPwd(data).subscribe( res=>{
      // alert('password has been reset successfully');
      
    // })
  }

  reset(){
    let Password = this.forgotForm.get('password').value;
    let confirmpassword = this.forgotForm.get('confirmPassword').value;
    if(Password != confirmpassword) {
      this.showConfirmPassword = true; 
    } else {
      let data = {newpassword:Password,newConfirmPassword:confirmpassword};
      console.log(data);
    }
  }

}
