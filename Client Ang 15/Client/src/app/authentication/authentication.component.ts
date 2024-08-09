import { Component } from '@angular/core';
import { MainService } from '../backend/main.service';
import { LoginDTO } from '../DTOs/LoginDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(public backend:MainService, public navigator:Router ){}

  obj:LoginDTO=new LoginDTO();

  submitLogin(){
   this.backend.Login(this.obj).subscribe(res=>{
    alert("Successfully Logged in");
    this.navigator.navigate(['/products']);
   },
  error=>{
    alert("Logged in failed");

  })}
}
