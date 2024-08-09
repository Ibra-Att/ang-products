import { Component } from '@angular/core';
import { ProductCardDTO } from '../DTOs/productListDTO';
import { MainService } from '../backend/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products:ProductCardDTO[]=[];

  constructor(public backend:MainService, public navigator:Router){}

  ngOnInit(){
    this.backend.getProductList().subscribe(
      res=>{
        this.products=res;
      },
      error=>{}
    )
  }

  goToDetails(){
    this.navigator.navigate(['/details']);
  }
}
