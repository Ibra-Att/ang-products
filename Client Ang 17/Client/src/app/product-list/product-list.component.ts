import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../_services/main.service';
import { ProductCardDto } from '../_dtos/productCardDto';
import {  Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  // products:ProductCardDto[]=[];
  mainService=inject(MainService);
  ProductId:number=0;
  router=inject(Router)

ngOnInit() {
if(this.mainService.productSig()?.length===0) 
  this.loadProduct();
}

// loadProduct(){
//   this.mainService.getProductsList().subscribe({
//     next: res=> this.products=res,
//     error: error=> console.log(error)  
    
//   })
// }

loadProduct(){
this.mainService.getProductsList();

}





// sendProdId(id:number|undefined){
//   if(id){
//   this.ProductId=id
//   this.router.navigateByUrl('/product-details');
//   // console.log(this.ProductId);
  
//   }
// }

}
