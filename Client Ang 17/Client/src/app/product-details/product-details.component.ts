import { Component, inject,  Input,  OnInit } from '@angular/core';
import { MainService } from '../_services/main.service';
import { productDetailsDto } from '../_dtos/productDetailsDto';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe,DatePipe,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

getProduct = inject(MainService);
route = inject(ActivatedRoute);
productDetails: productDetailsDto | null = null;

ngOnInit() {
  const productId: number = Number(this.route.snapshot.paramMap.get('id'));

  if (!productId) {
    console.error('Invalid product ID');
    return;
  }

  this.getProduct.getProductDetails(productId).subscribe({
    next: (res) => this.productDetails = res,
    error: (err) => console.error('Error fetching product details', err)
  });
}


}




