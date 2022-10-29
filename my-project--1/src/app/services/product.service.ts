import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: Product[] = [];
  configUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}
  getProduct(){
      return this.product;
      // return this.http.get<[]>(this.configUrl)
    

  }

  addProduct(added: Product) {
    this.product.push(added);
    return this.product;
  }
  removeProduct(added: Product) {
    let removable = this.product.findIndex((obj) => obj.id === added.id);
    this.product.splice(removable, 1);
    alert('Removed');
  }
}
