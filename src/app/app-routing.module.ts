import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products/products.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'companyInfo', component: CompanyInfoComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
