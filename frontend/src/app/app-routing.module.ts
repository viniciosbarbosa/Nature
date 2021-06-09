import { ProductComponent } from './views/product/product.component';
import { HomeComponent } from './views/home/home.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{path: '' , component: HomeComponent},
{path: 'products' , component : ProductComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
