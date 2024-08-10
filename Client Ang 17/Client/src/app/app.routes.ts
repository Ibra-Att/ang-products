import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './_guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:MainPageComponent, title:'Home page'},

    {path:'', runGuardsAndResolvers:'always',canActivate:[authGuard], children:[
        {path:'cart',component:CartComponent,title:'Cart'},
        {path:'products-table', component:ProductsTableComponent, title:'Table of Products'},


    ]},
    
    {path:'product-list',component:ProductListComponent, title:'Prodeuct List'},    
    {path:'product-details/:id',component:ProductDetailsComponent, title:'Prodeuct Details'},
    {path:'about-us',component:AboutUsComponent, title:'About us'},
    {path:'login',component:LoginComponent, title:'Login'},
    {path:'register',component:RegisterComponent, title:'Sign up'},
    {path:'not-found',component:NotFoundComponent, title:'Not-Found'},
    {path:'server-error',component:ServerErrorComponent, title:'Server-Error'},

    {path:'**',component:MainPageComponent, pathMatch:'full'}

];
