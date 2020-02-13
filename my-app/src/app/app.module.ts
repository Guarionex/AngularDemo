import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TopBarModule} from './top-bar/top-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    TopBarModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: '', component: ProductListComponent}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
