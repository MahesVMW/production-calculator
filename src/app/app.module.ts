import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTableComponent } from './product-table/product-table.component';
import { PerunitcostComponent } from './perunitcost/perunitcost.component';
import { CalcComponent } from './calc/calc.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductTableComponent,
    PerunitcostComponent,
    CalcComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
