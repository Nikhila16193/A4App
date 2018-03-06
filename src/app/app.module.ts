import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostjsonComponent } from './postjson/postjson.component';
import {GetjsondataService} from './getjsondata.service';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutusComponent,
    PageNotFoundComponent,
    PostjsonComponent,
    WishlistComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  //   RouterModule.forRoot([
  //    {
  //     path : 'products',
  //     component : ProductComponent  
  //    }
  // ])
  ],
  providers: [GetjsondataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
