import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
  slidePosition = 1;
 
  images = ['./assets/images/home/pipe9.jpeg',
  './assets/images/home/carousel2.jpg',
  './assets/images/home/carousel3.jpg']

  constructor() { }
}
