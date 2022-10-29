import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {

  name: any;
  address: any;
  @Input() amount: any;

  constructor(private router: Router) {
  
    this.name = this.router.url
      .substring(
        this.router.url.indexOf('name=') + 5,
        this.router.url.lastIndexOf(';address=')
      )
      .replace('%20', ' ');


    this.address = this.router.url
      .substring(
        this.router.url.indexOf('address=') + 8,
        this.router.url.lastIndexOf(';amount=')
      )
      .replace('%20', '   ');

    this.amount = 
    
    this.router.url.substring(
      this.router.url.indexOf('amount=') + 7,
      this.router.url.lastIndexOf('')
    );
  }

  ngOnInit(): void {}

  backtolist(): void {
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }
}
