import { Component, OnInit } from '@angular/core';import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cart-us',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  product;
  checkoutForm;
    constructor(private cartService: CartService, private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    }); }
    ngOnInit() {
      this.product = this.cartService.getproduct();
    }
      onSubmit(customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);
        this.product = this.cartService.clearCart();
        this.checkoutForm.reset(alert('thank you for your purchase'));
      }
      plus(i: string | number) {
        this.product[i].quantity++;
        this.product[i].total = this.product[i].quantity * this.product[i].price;
    }
      minus(i: string | number) {
        if (this.product[i].quantity === 1) {
          this.product[i].quantity = 0;
          this.product.splice(i, 1);
        } else {
          this.product[i].quantity--;
        }
      }
      removeItem(i: string | number) {
        this.product[i].quantity = 0;
        this.product.splice(i, 1 );
      }
      total() {
        let total = 0;
        for (let i of this.product) {
          total += i.total;
          console.log(total);
        }
      }
  }
