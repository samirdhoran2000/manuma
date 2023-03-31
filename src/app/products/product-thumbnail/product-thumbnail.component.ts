import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from '../../shared/interfaces';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: ProductInfo;
  @Input() width = '300';
  @Input() height = '320';

  defaultImage = './assets/images/default-image.png';
  defaultImage1 = './../../../assets/logo1.png';

  constructor(private router: Router) {}

  ngOnInit() {}

  directTo() {
    this.router.navigate([`/category/product/${this.product.id}`]);
  }
}
