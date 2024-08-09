import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetaislComponent } from './product-details/product-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  {path:'',component:MainPageComponent, title:'Home page'},
  {path:'about',component:AboutComponent, title:'About us page'},
  {path:'contact',component:ContactComponent, title:'Contact us page'},
  {path:'products',component:ProductsListComponent, title:'Products page'},
  {path:'details',component:ProductDetaislComponent, title:'Product detail'},
  {path:'authentication',component:AuthenticationComponent, title:'Authen'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
