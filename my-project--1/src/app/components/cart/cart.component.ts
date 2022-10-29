import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
 products: Product[] = [];
 addedProduct: Product[] = [];
  username: any;
  address: any;
  credit: any;
  number: number = 0;
  amount: number = 0;
  numberOfItems: number = 0;
  notValid:any;
  notValidDigit:any;
  id:any


  constructor(
    private router: Router,
    private productservice: ProductService,
    private http: HttpClient,
  ) {
    //this.addedProduct = this.productservice.getProduct();
  }

  ngOnInit(): void {
       this.products = this.productservice.getProduct();
    //  this.productservice.getProduct().subscribe(res=>{
    //     this.addedProduct=res;
    //   })
   

  }



 
  validateName(){
   if(this.username.length<5)
   {
       this.notValid ="not valid "
   }
   else{
    this.notValid="valid"
   }

   return this.notValid;
  }
  validatedigit(){
    if(isNaN(this.credit))
    {
      this.notValidDigit ="only numbers should allows here  "
    }
    else if(this.credit.length < 19  )
    {
     this.notValidDigit ="not valid "
 
       
    }
    
    else if(this.credit.length < 19 && isNaN(this.credit) )
   {
    this.notValidDigit ="not valid "

      
   }
   else{
    this.notValidDigit="valid"


   }

   return this.notValidDigit;

  }
  calcAmount()  {
    this.amount=0;
    for (let i = 0; i <= this.products.length; i++) {
      if (this.products[i]?.price) {
        this.amount = this.amount+
         this.products[i].amount * this.products[i].price;
       
         
      }
      
    }
    return this.amount;
  }
  onSubmit() {

    
    this.router.navigate([
      '/confirmation',
      { name: this.username, address: this.address, amount: this.amount },
    ]);
  }
  increseAmount(product: Product): void {
    
    product.amount += 1;
    this.amount+=product.price;

    
  }
  decressAmount(product: Product): void {
    product.amount -= 1;
    
    this.amount-=product.price;

    
  }

  remove(post: Product): void {
   if(this.products.length===1)
    {
      this.amount=0;
      this.productservice.removeProduct(post);
    }
    else{
    this.amount=this.amount-(post.amount*post.price);
    this.productservice.removeProduct(post);
    }
  
  }
}
function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

