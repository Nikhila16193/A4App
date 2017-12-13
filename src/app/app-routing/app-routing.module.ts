import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from '../product/product.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import {PostjsonComponent} from '../postjson/postjson.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'post', component: PostjsonComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
