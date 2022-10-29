import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  title = 'Component Interaction';
  products: Product []=[]; 
  Counter :any;
  product:any;
 


  constructor(private ProductDetailsService:ProductDetailsService    ) { }
 
  ngOnInit(): void {
    this.products=this.ProductDetailsService.getProduct()
  }
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
    this.ChangedHandler(this.product);
  }
  ChangedHandler(product: Product) {
    this.product = product;
    return this.product;
    console.log(product);
  }

}
