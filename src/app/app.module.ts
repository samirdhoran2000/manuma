import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TileOverlayComponent } from './tile-overlay/tile-overlay.component';
import { SectionCounterComponent } from './section-counter/section-counter.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    CarouselComponent,
    ContactUsComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    CompanyInfoComponent,
    FooterComponent,
    CarouselComponent,
    DashboardComponent,
    ProductDetailComponent,
    TileOverlayComponent,
    SectionCounterComponent,
    HeaderComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
