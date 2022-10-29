import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  products: Product[] = [];

    @Input() count: number | undefined;
    @Output() countChanged: EventEmitter<number> =   new EventEmitter();

    // @Input()  product: any | undefined;
    // @Output() Changed: EventEmitter<Product> =   new EventEmitter();

  constructor(
    private detailsservice: ProductDetailsService,
    private productservice: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.detailsservice.getProduct().slice(-1);
  }

  addProduct(productcard: Product): void {
    let arr = this.productservice.getProduct();
     let index = arr.length;

    for (let i = 0; i <= arr.length; i++) {
      if (productcard.amount===0) {
        productcard.amount+=1;
      //  this.Changed.emit(productcard)
        this.productservice.addProduct(productcard);

        alert('Added');

        break;
      } 
   
      if (index === i || productcard.amount===0) {
        // this.Changed.emit(productcard)
        this.productservice.addProduct(productcard);

        alert('Added');

        break;
      } 
      
        else if (arr[i].id == productcard.id) {
        alert('Increse Your Amount From Cart ');
        break;
      }
    }
  }
  increseAmount(product: Product): void {
    product.amount += 1;
     this.countChanged.emit(product.amount);
  }
  decressAmount(product: Product): void {
    product.amount -= 1;
    this.countChanged.emit(product.amount)
  }
}
