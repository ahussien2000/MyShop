import { Component, OnInit } from '@angular/core';
import ProductData from 'src/assets/data.json';
import { ProductService } from '../../services/product.service';
import { Router, Routes } from '@angular/router';
import { ProductDetailsService } from '../../services/product-details.service';
// import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: String;
  price: number;
  url: String;
  description: String;
  amount: number;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = ProductData;
  amount: any;
  configUrl = 'assets/data.json';


  constructor(
    private productservice: ProductService,
    private router: Router,
    private detailsservices: ProductDetailsService,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
   this.http.get(this.configUrl);
    
  }

  addProduct(productcard: Product): void {
    let arr = this.productservice.getProduct();
     let index = arr.length;

    for (let i = 0; i <= arr.length; i++) {
   
      if (index === i && productcard.amount===0) {
        productcard.amount+=1;
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

  productDetails(productCard: Product): void {
    this.detailsservices.addProduct(productCard);
    this.detailsservices.getSpecificProduct(productCard);
    this.detailsservices.getProduct();
     this.router.navigateByUrl('/product-item');
    //this.router.navigateByUrl('/product-item-details');
  }
  increseAmount(product: Product): void {
    product.amount += 1;
  }
  decressAmount(product: Product): void {
    product.amount -= 1;
  }
}


