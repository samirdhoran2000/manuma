import { Component } from '@angular/core';

@Component({
  selector: 'app-tile-overlay',
  templateUrl: './tile-overlay.component.html',
  styleUrls: ['./tile-overlay.component.css']
})
export class TileOverlayComponent {
  pipeImage = [
    {id:1, pipeName:'PVC Agricultural Pipes', img:'./assets/images/home/pipe4.jpeg',discription:'PVC pipes are very customisable and used in agriculture. We offer durable high quality pipes.'},
    {id:2, pipeName:'PVC Casing Pipes', img:'./assets/images/home/pipe6.jpeg',discription:'PVC plain casing pipes are specially designed to ensure clean clear water from bore wells to farm. We manufactured using world-class raw material and technology.'},
    {id:3, pipeName:'ASTM Pipes & Fittings', img:'./assets/images/home/pipe8.jpeg',discription:' ASTM Pipes are cost-effective, non-toxic and lead free which is ideal for carrying the water. We offer various range of ASTM pipes.'
  }]

}
