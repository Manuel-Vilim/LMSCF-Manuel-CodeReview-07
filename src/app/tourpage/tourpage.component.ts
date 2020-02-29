import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { product } from '../product';

@Component({
  selector: 'tourpage',
  templateUrl: './tourpage.component.html',
  styleUrls: ['./tourpage.component.css']
})
export class TourpageComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cart.addToCart(product);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = product[+params.get('productId')];
   });

  }

}