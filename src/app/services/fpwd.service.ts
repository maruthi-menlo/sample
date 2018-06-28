import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FpwdService {

  constructor( private http:HttpClient) { }

  forgotPwd(data){
    return this.http.post('http://localhost:5000/api/v1/forgot_password',data).pipe(map(res=>{
      return res;
    }))
  }
}
