import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  showAll = false;
  productDetails = [
    {
      id: 1,
      pipeName: 'PVC Agricultural Pipes',
      shortDiscription:
        'PVC pipes are very customisable and used in agriculture. Agricultural PVC pipes are durable and is primarily used for water transportation and storage and it can also be used for irrigation and hydroponic systems. <br><br> We are leading pipe manufacturer and provides durable agricultural pipes to our farmer. We have various range of Agricultural pipes. <br><br> We offer durable high quality pipes. so once you install it you do not need to replace it over year and year. As these plumbing systems are long-lasting, they significantly reduce operational costs.' +
        '<br><br> <b>We have varities of sizes range includes 50mm, 63mm, 75mm, 90mm, 110 mm, 140mm, 160mm, 180mm, 200mm and 315mm agriculture pipes. <b>',
      images: [
        './assets/images/home/pipe1.jpeg',
        './assets/images/home/pipe4.jpeg',
        './assets/images/home/pipe5.jpeg',
      ],
      discription:
        'PVC pipes are very customisable and used in agriculture. Agricultural PVC pipes are durable and is primarily used for water transportation and storage and it can also be used for irrigation and hydroponic systems. <br><br> <b>We are leading pipe manufacturer</b> and provides durable agricultural pipes to our farmer. We have various range of Agricultural pipes. <br><br> We offer durable high quality pipes. so once you install it you do not need to replace it over year and year. As these plumbing systems are long-lasting, they significantly reduce operational costs.' +
        '<br><br> <b>We have varities of sizes range includes 50mm, 63mm, 75mm, 90mm, 110 mm, 140mm, 160mm, 180mm, 200mm and 315mm agriculture pipes. <b>',
    },
    {
      id: 2,
      pipeName: 'PVC Casing Pipes',
      discription:
        'PVC plain casing pipes are specially designed to ensure clean clear water from bore wells to farm. we offer an extensive range of durable Casing Pipes which used in various underground application.<br><br> <b>We are leading pipe manufacturer. We manufactured using world-class raw material and technology.<b> ' +
        '<br><br> <b>We have varities of sizes range includes 110mm, 140mm, 160mm, 200mm, 250mm and 315mm casing pipes. <b>',
      shortDiscription:
        'PVC plain casing pipes are specially designed to ensure clean clear water from bore wells to farm. we offer an extensive range of durable Casing Pipes which used in various underground application.<br><br> We are leading pipe manufacturer. We manufactured using world-class raw material and technology.' +
        '<br><br> <b>We have varities of sizes range includes 110mm, 140mm, 160mm, 200mm, 250mm and 315mm casing pipes. <b>',
      images: [
        './assets/images/home/pipe6.jpeg',
        './assets/images/home/pipe7.jpeg',
      ],
    },
    {
      id: 3,
      pipeName: 'ASTM Pipes & Fittings',
      images: [
        './assets/images/home/pipe2.jpeg',
        './assets/images/home/pipe3.jpeg',
        './assets/images/home/pipe8.jpeg',
      ],
      discription:
        ' ASTM Pipes are cost-effective, non-toxic and lead free which is ideal for carrying the water. It is very easy to install and value added for various applications which includes residential, offices and industry. <br><br> <b>We are leading pipe manufacturer. We manufactured using world-class raw material and technology.<b> We offer various range of ASTM pipes.' +
        '<br><br> <b>We have varities of sizes range includes 50mm, 63mm, 75mm, 90mm, 110 mm, 140mm, 160mm, 180mm, 200mm and 315mm agriculture pipes. <b>',
      shortDiscription:
        ' ASTM Pipes are cost-effective, non-toxic and lead free which is ideal for carrying the water. It is very easy to install and value added for various applications which includes residential, offices and industry. <br><br> We offer various range of ASTM pipes.' +
        '<br><br> <b>We have varities of sizes range includes 50mm, 63mm, 75mm, 90mm, 110 mm, 140mm, 160mm, 180mm, 200mm and 315mm agriculture pipes. <b>',
    },
  ];
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductDtails();
  }

  getProductDtails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id === 0) {
      this.showAll = true;
    } else {
      this.getProduct(id).subscribe((product) => (this.product = product));
    }
  }

  getProduct(id: number): Observable<any> {
    let product = this.productDetails.find((product) => product.id === id);
    console.log('Selected product is', product);
    return of(product);
  }
}
