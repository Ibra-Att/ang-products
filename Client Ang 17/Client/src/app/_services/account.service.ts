import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {  userDto } from '../_dtos/Auth/userDto';
import { map, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { registerUserDto } from '../_dtos/Auth/registerUserDto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 http=inject(HttpClient);
 baseUrl=environment.apiUrl;

 currentUser=signal<userDto|null>(null);

 constructor() {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    this.currentUser.set(JSON.parse(storedUser));
  }
}    // Angular application loses its state when the page is refreshed.
//  While the localStorage still contains the user information, 
// the currentUser signal is reset to its initial value, which is null.


// login(inputs:loginDto){
//   const headers=new HttpHeaders({'Accept': 'text/plain'});
//  return this.http.post(`${this.baseUrl}/Authentication/Login`,inputs,{headers,responseType:'text'});
// }

login(input:any){
  return this.http.post<userDto>(`${this.baseUrl}/Authentication/Login`,input).pipe(
    tap(user=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUser.set(user);
      }
    })
  )
}



logout(){
  localStorage.removeItem('user');
  this.currentUser.set(null);
}
 
// registerUser(input:any){
//   return this.http.post<registerUserDto>(`${this.baseUrl}/Authentication/Register`,input);
//  }
registerUser(input:registerUserDto ) {
  return this.http.post(`${this.baseUrl}/Authentication/Register`, input,{responseType:"text"});
}



}


