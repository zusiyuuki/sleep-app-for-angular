import { products } from 'src/app/products';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {

  products: any

  constructor() { }

  ngOnInit(): void {
    this.products=products
  }

}
