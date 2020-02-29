import { Component, OnInit } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
product = product;
  constructor() { }

  ngOnInit(): void {
  }

}
