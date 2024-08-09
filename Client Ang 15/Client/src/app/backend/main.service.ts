import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardDTO } from '../DTOs/productListDTO';
import { LoginDTO } from '../DTOs/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // the purpose of this base Url for dynamically handle when change the domain we just modify this
  private baseUrl='https://localhost:44368';
  
  constructor(private http:HttpClient) { }


  getProductList():Observable<ProductCardDTO[]>{
   return this.http.get<ProductCardDTO[]>(`${this.baseUrl}/api/Main/GetAllProduct`);
  }

  

  //in post/put/delete no need for giving a type , unlike get end point,
  //because it's already sends the data as json , but u need to give a type for params if needed
  Login(input:LoginDTO){
   return this.http.post(`${this.baseUrl}/api/Authentication/Login`,input,{responseType:"text"});
  }
}
