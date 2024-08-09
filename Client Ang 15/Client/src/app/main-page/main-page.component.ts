import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MainService } from '../backend/main.service';
import { Subscriber } from 'rxjs';
import { ProductCardDTO } from '../DTOs/productListDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  products:ProductCardDTO[]=[];
  constructor(public backend:MainService,public navigator:Router){}

  ngOnInit(){
    this.backend.getProductList().subscribe({
     next:res=>{this.products=res},
     error: error=>{ },
    })
  }

  goToDetails(){
    this.navigator.navigate(['/details']);
  }
}
