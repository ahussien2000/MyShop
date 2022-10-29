import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  product: Product[] = [];
  configUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}
  getProduct(){
      return this.product;
    // return this.http.get<[]>(this.configUrl)
  }

  getProductDetails(id:any):Observable<[]>
  {
   return this.http.get<[]>(this.configUrl+'product-details/'+id)
  }
  getSpecificProduct(added: Product) {
    return added;
  }
  addProduct(added: Product) {
    this.product.push(added);
    return this.product;
  }
}
