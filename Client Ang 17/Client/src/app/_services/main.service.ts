import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ProductCardDto } from '../_dtos/productCardDto';
import { Observable } from 'rxjs';
import { productDetailsDto } from '../_dtos/productDetailsDto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  http=inject(HttpClient);
  baseUrl=environment.apiUrl;

 productSig=signal<ProductCardDto[]|undefined>([]);

 
 getProductsTable():Observable<ProductCardDto[]>{
  return this.http.get<ProductCardDto[]>(`${this.baseUrl}/Main/GetAllProduct`);
 }

getProductsList(){
  return this.http.get<ProductCardDto[]>(`${this.baseUrl}/Main/GetAllProduct`).subscribe({
    next: res => this.productSig.set(res)
  });
 }

getProductDetails(id:number):Observable<productDetailsDto>{
  return this.http.get<productDetailsDto>(`${this.baseUrl}/Main/GetProductById/${id}`);
}

deleteProduct(id:number){
  return this.http.delete(`${this.baseUrl}/Main/DeleteProductById/${id}`);
}
 
}
